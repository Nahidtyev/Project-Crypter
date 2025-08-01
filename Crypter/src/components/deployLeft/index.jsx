import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import {GoArrowLeft} from 'react-icons/go'
import { Link } from 'react-router-dom'
import './dL.scss'
import Congrats from './congrats'
const Deployleft = () => {
  const [congrats, setCongrats] =useState(false);
  const handleCongrats = () => {
    setCongrats(!congrats);
  }
  return (
    <div className="deploy-left">
        <Link to={'/create-2'}><button className='back'><GoArrowLeft size={24}/></button></Link>
        <div className="top">
            <h1>Deploy your smart <br /> contract</h1>
            <span>Approve the transaction in your wallet</span>
            <p>Deploying a smart contract means that your collection will be added to the blockchain. 
                Anytime you interact with the blockchain, you’ll need to approve the transaction and 
                pay a gas fee to the network. </p>
        </div>
        <button onClick={handleCongrats} className="submit">deploy your contract <FaArrowRight size={24}/></button>
        {congrats && (<Congrats/>)}
    </div>
  )
}

export default Deployleft