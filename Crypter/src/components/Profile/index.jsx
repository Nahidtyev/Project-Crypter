import React from 'react'
import ProfileLeft from '../Profileleft'
import bg_img from '../../assets/Profile/bg_img.png'
import './profile.scss'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../service/service'

const Profile = () => {
  const{data}=useQuery({
    queryKey:["profile"],
    queryFn: ()=> client.fetch(`*[_type == "profile"]`)
  }) 
  return (
          <div className="col-xl-6">
            {data&&
            data.map((data)=>(
              <ProfileLeft
                key={data.index}
                name={data.name}
                follow={data.follow}
                sales={data.sales}
                image={data.image}
                bio={data.bio}
                follower={data.follower}
              />
            ))}
          </div>
  )
}

export default Profile