import React from 'react'
import { TfiTwitter } from "react-icons/tfi";
import { RiFacebookBoxLine } from "react-icons/ri";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import './shareright.scss'
const ShareRight = () => {
  return (
    <div className="row">
      <div className="share-right">
        <h1>Share this NFT</h1>
        <p>Share this NFT with your social Community</p>
        <div className='row'>
            <div className="media"><TfiTwitter size={24}/></div>
            <div className="media"><RiFacebookBoxLine size={24}/></div>
            <div className="media"><TiSocialLinkedinCircular size={24}/></div>
            <div className="media"><FaInstagram size={24}/></div>
        </div>
      </div>
    </div>
  )
}

export default ShareRight