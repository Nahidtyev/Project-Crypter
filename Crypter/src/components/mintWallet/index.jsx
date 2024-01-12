import React, { useState } from 'react'
import { GoArrowLeft, GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import Congrats from '../deployLeft/congrats'
import './mW.scss'
const MintW = () => {
    const [congrats, setCongrats] =useState(false);
  const handleCongrats = () => {
    setCongrats(!congrats);
  };
  return (
    <div className="mint-wallet">
        <div className="top">
            <Link to={'/mint'}><button className='back'><GoArrowLeft size={24}/></button></Link>
            <h1>Mint your NFT</h1>
            <span>Approve the transaction in your wallet</span>
            <p>Deploying a smart contract means that your collection will be added to the blockchain. Anytime you interact with the blockchain, 
                you’ll need to approve the transaction and pay a gas fee to the network. </p>
        </div>
        <button onClick={handleCongrats} className="submit">Approve <GoArrowRight size={24}/></button>
        {congrats && (<Congrats/>)}
    </div>
  )
}

export default MintW