import React, { useState } from 'react'
import { SlShareAlt } from "react-icons/sl";
import emoji from '../../../assets/home/emoji.png'
import { IoCloseOutline } from "react-icons/io5";
import './congrats.scss'
import Share from '../../share';
const Congrats = () => {
  const handleClose = () => {
    window.location.reload();
  };
  const [share, setShare] =useState(false);
  const handleShare = () => {
    setShare(!share);
  };
  return (
    <div className="congrats">
      <button onClick={handleClose} className='close'><IoCloseOutline size={24}/></button>
        <img src={emoji} alt="" />
        <h1>Congrats</h1>
        <p>You’ve now deployed your very own smart contract! 
          This is an important first step for all creators to make as you share your work and mint NFTs in web3.</p>
        <div className='btns'>
          <button>view nft</button>
          <button onClick={handleShare}>share <SlShareAlt size={20}/></button>
          {share && (<Share/>)}
        </div>
    </div>
  )
}

export default Congrats