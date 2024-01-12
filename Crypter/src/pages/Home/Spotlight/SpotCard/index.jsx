import React from 'react'
import {urlFor} from '../../../../service/service'
import ast from '../../../../assets/home/ast.png'
import covboy from '../../../../assets/home/covboy.png'
import dash from '../../../../assets/home/dash.png'
import './spotcard.scss'
const SpotCrad = ({name,price,image}) => {
  return (
    <div className="spot-card">
        <img className='col-xl-12' src={urlFor(image)} alt="" />
        <div className="lower">
            <div>
                <h6>{name}</h6>
                <p>Buy now<span> {price} ETH</span></p>
            </div>
            <div className="profile-ps">
                <img src={ast} alt="" />
                <img src={covboy} alt="" />
                <img src={dash} alt="" />
            </div>
        </div>
        
    </div>
  )
}

export default SpotCrad