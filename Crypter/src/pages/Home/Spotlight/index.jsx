import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { client } from '../../../service/service'
import SpotCrad from './SpotCard'
import './spotlight.scss'
import { useState } from 'react'
import {Link} from 'react-router-dom'

const Spotlight = () => {
    const {data} = useQuery({
        queryKey:["spotlight"],
        queryFn: () => client.fetch(`*[_type=="spotlight"]`)
    })

    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };
  return (
    <div id="spotlight">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="heading">
                        <h1>Spotlight. <br /><p>Projects you'll love</p></h1>
                        <div className="filters">
                        <button className={selectedButton === 0 ? 'active' : ''}
                            onClick={() => handleButtonClick(0)}>
                                1 days
                        </button>
                        <button className={selectedButton === 1 ? 'active' : ''}
                            onClick={() => handleButtonClick(1)}>
                            7 days
                        </button>
                        <button className={selectedButton === 2 ? 'active' : ''}
                            onClick={() => handleButtonClick(2)}>
                            30 days
                        </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12">
                    <div className="row">
                        {data&&data.map((data,index)=>(
                            <div className="col-xl-3" key={index}>
                                <SpotCrad
                                  name={data.name}
                                  price={data.price}
                                  image={data.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-xl-12 exp">
                    <button className='explore'><Link to={'/discover'}>explorer more <button>109</button></Link></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Spotlight