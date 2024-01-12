import React from 'react'
import { urlFor } from '../../../service/service'
import './activitycard.scss'
const Card = ({name,image,price}) => {
  return (
    <div className="activity-card">
        <div className="pp">
            <div className='pp1'>
              <img src={urlFor(image)} alt="" />
              <span className='nm'><p>Received from</p><span>@{name}</span></span>
            </div>
            <p>x456...8jh7</p>
        </div>
        <span className='offer'>Offer price</span>
        <ul>
            <li><span>{price}</span><span>ETH</span></li><hr />
            <li><p>Crypter fee</p><span>0.0055 ETH</span></li><hr />
            <li><p>Total receive</p><span>0.9945 ETH</span></li>
        </ul>
        <button>accept offer</button>
    </div>
  )
}

export default Card