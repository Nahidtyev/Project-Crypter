import React from 'react'
import HelpCard from './card'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../service/service'
import {Link} from 'react-router-dom'

const HelpRight = () => {
    const {data} =useQuery({
        queryKey: ['helpcenter'],
        queryFn: ()=>client.fetch(`*[_type=='helpcenter']`)
    })
  return (
    <div className=" help-right">
            {data&&data.map((data,index)=>(
                <Link to={`/helpcenter/${data._id}`}>
                  <HelpCard
                      key={data.index}
                      text={data.text}
                      image={data.image}
                  />
                </Link>
            ))}
    </div>
  )
}

export default HelpRight