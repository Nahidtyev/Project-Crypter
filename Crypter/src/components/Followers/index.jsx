import React from 'react'
import './follower.scss'
import { useQuery } from '@tanstack/react-query'
import Card from './Card'
import { client } from '../../service/service'
const Followers = ({image}) => {
  const {data}= useQuery({
    queryKey:["follower"],
    queryFn: () => client.fetch(`*[_type=="follower"]`), 
  })
  return (
    <div className="follower">
      <div className="container">
        <div className="row">
          <ul className='secs'>
            <li >Followers <button>2,880</button></li>
            <li >Following <button>1,920</button></li>
          </ul>
          <div className='hd'>
            <h1>Followers</h1>
            <h2>2,880</h2>
          </div>
          {
            data&&data.map((data,index)=>(
              <Card
                index={data.index}
                name={data.name}
                price={data.price}
                image={data.image}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Followers