import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import {urlFor} from '../../../service/service'
import './card.scss'
const Mintcard = ({name,image}) => {
  return (
    <div className="mint-card">
        <div>
            <img src='' alt="" />
            <p>{name}<br /><span>12 NFT's</span></p>
        </div>
        <IoIosCheckmarkCircle size={40}/>
    </div>
  )
}

export default Mintcard