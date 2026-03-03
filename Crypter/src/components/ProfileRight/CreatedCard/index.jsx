import React from 'react'
import './card.scss'
import { urlFor } from '../../../service/service'

const CreatedCard = ({name,price,image}) => {
  return (
    <div className="created-card">
        <img src={urlFor(image)} alt="" />
        <div className="pro">
            <span>
                <h6>{name}</h6>
                <p>Buy now</p>
                <span>{price} ETH</span>
            </span>
            <span>
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </span>
        </div>
    </div>
  )
}

export default CreatedCard