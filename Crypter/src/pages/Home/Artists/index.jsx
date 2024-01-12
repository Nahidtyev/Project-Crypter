import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import {client} from '../../../service/service'
import ArtistCard from './ArtistCard';
import './artist.scss'
import { Link } from 'react-router-dom';
const Artists = () => {
  const {data} = useQuery({
    queryKey: ["artists"],
    queryFn: () => client.fetch(`*[_type=="artists"]`)
  })

  if (!data || !Array.isArray(data)) {
    return ;
  }
  const sortedData = data.slice().sort((a, b) => a.number - b.number);

  return (
    <div id="artists">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="left">
              <div className='first'>
                <h1>Hot NFT <br /> artists of the month.</h1>
                <Link to={'/ranking'}><button><FaArrowRight size={24} color='#010101'/></button></Link>
              </div>
              <div>
                <p>We are laying the groundwork for web3 — the next generation 
                  of the internet full of limitless possibilities. Join the millions 
                  of creators, collectors, and curators who are on this journey with you.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="right">
              <div className="row">
              {sortedData&&sortedData.map((data,index)=>(
                  <div className="col-xl-6" key={index}>
                    <Link to={`/ranking`}>
                    <ArtistCard
                      name={data.name}
                      sale={data.sale}
                      image={data.image}
                      number={data.number}
                    />
                    </Link>
                  </div>
              ))}
              <div className="explore">
                  <button>explore more</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artists