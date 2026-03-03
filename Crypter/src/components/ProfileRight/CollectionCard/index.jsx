import React from 'react'
import tiny from '../../../assets/createdcard/c6.png'
import { urlFor } from '../../../service/service'
import {TbTriangleFilled} from 'react-icons/tb'
import './card.scss'
const CollectionCard = ({name,image,floor}) => {
  return (
    <div className="collection-card">
        <button><img className='tiny' src={tiny} alt="" /> ESCP</button>
        <img className='big' src={urlFor(image)} alt="" />
        <div className="pro">
            <h6>{name}</h6>
            <span>
                <span><TbTriangleFilled size={20}/> +22.4%</span>
                <p>Floor: <span>{floor}</span> ETH</p>
                <span>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </span>
            </span>
        </div>

    </div>
  )
}

export default CollectionCard