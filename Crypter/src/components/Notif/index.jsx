import React from 'react'
import './notif.scss'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../service/service'
import Card from './Card'
import { Link } from 'react-router-dom'

const Notif = () => {
    const{data} = useQuery({
      queryKey : ["follower"],
      queryFn : ()=> client.fetch(`*[_type=="follower"]`)
    })
    return (
        <div className="notif">
          <div className="container">
            <div className="row">
              <ul className='secs'>
                <li >Notification <button>24</button></li>
                <li >Activity <button>0</button></li>
              </ul>
              <div className='hd'>
                <h1>Notification</h1>
                <h2>August 2022</h2>
              </div>
              {
                data&&data.map((data,index)=>(
                  <Link to={`/activity/${data._id}`}>
                    <Card
                      index={data.index}
                      name={data.name}
                      image={data.image}
                    />
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      )
}

export default Notif