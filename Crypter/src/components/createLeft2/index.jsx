import React from 'react'
import { CgProfile } from "react-icons/cg";
import { SiMailgun } from "react-icons/si";
import { FaArrowRight } from "react-icons/fa6";
import { GoArrowLeft } from "react-icons/go";
import { Link } from 'react-router-dom'

import './cL2.scss'
const CreateLeft2 = () => {
    
  return (
    <div className="create-left2">
        <Link to={'/create'}><button className='back'><GoArrowLeft size={24}/></button></Link>
        <div>
            <h1>Create a collection</h1>
            <p>Deploy a smart contract to showcase a series of NFT artworks.</p>
            <ul>
                <li><input placeholder='Collection name' type="text" /><CgProfile size={20} color='#686A6C' className='icn'/><hr /></li>
                <li><input placeholder='Collection symbol' type="text" /><SiMailgun size={20} color='#686A6C' className='icn'/><hr /></li>
            </ul>
        </div>
        <Link to={'/deploy'}><button className='continue'>Continue <FaArrowRight /></button></Link>
    </div>
  )
}

export default CreateLeft2