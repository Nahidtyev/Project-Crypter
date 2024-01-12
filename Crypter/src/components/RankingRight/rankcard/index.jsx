import React from 'react'
import './rankcard.scss'
import hex from '../../../assets/home/hex.svg'
import { urlFor } from '../../../service/service'
const RankCard = ({number,image,name,sale,price,volume}) => {
  return (
    <div className="rank-card">
        <div className='left'>
            <button><img src={hex} alt="" /><p>{number}</p></button>
            <img src={urlFor(image)} alt="" />
            <h6>{name} <br /><p>Total sale <span>{sale} ETH</span></p></h6>
        </div>
        <div className='volume'>
          <p>{price} ETH <br /><span>$ {volume}</span></p>
        </div>
    </div>
  )
}

export default RankCard