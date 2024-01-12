import React from 'react'
import { client, urlFor } from '../../service/service'
import './helpcatL.scss'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
const HelpcatLeft = ({text,image}) => {
  const {data} = useQuery({
    queryKey: ['helpcenter'],
    queryFn:()=>client.fetch(`*[_type=="helpcenter"]`)
  })
  return (
    <div className="help-cat-left">
        <h1>{text}</h1>
        <Link to={`/help/details/${data._id}`}><img src={urlFor(image)} alt="" /></Link>
    </div>
  )
}

export default HelpcatLeft