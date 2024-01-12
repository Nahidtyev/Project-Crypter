import React from 'react'
import {urlFor} from '../../../../service/service'
import './artistcard.scss'
import hex from '../../../../assets/home/hex.svg'
const ArtistCard = ({name,sale,image,number}) => {
  return (
    <div className="artist-card">
        <div className='num'>
            <button><img src={hex} alt="" /><p>{number}</p></button>
        </div>
        <img src={urlFor(image)} alt="" />
        <h6>@{name}</h6>
        <p>Total sale <span>{sale} ETH</span></p>
    </div>
  )
}

export default ArtistCard