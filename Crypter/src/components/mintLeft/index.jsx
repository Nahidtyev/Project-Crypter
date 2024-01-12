import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { AiTwotoneEdit } from "react-icons/ai";
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import Mintcard from './card';
import './mL.scss'
const MintLeft = () => {
  return (
    <div className="mint-left">
        <Link to={'/create-2'}><button className='back'><GoArrowLeft size={24}/></button></Link>
        <div className="top">
            <h1>Mint NFT</h1>
            <p>Deploy a smart contract to showcase a series of NFT artworks.</p>
            <ul>
                <li><input placeholder='NFT title' type="text" /><AiTwotoneEdit size={20} color='#686A6C' className='icn'/><hr /></li>
                <li><input placeholder='Description' type="text" /><AiTwotoneEdit size={20} color='#686A6C' className='icn'/><hr /></li>
            </ul>
        </div>
        <div className="bottom">
            <span>Collection</span>
            <Mintcard/>
            <div className='col-xl-12'>
                <button >Preview</button>
                <button ><Link to={'/mint-wallet'}>mint <GoArrowRight size={20}/></Link></button>
            </div>
        </div>
    </div>
  )
}

export default MintLeft