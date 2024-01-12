import React from 'react'
import './detailtop.scss'
import { urlFor } from '../../../../service/service'
const DetailTop = ({text,image}) => {
  return (
    <div className="col-xl-12 detail-top">
        <img src={urlFor(image)} alt="" />
        <h1>{text}<br /><span>Crypter NFT marketplace blog</span></h1>
    </div>
  )
}

export default DetailTop