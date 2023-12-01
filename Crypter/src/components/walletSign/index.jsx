import React from 'react'
import './sign.scss';
import logo from '../../assets/Wallet/logo.png'
import {FiArrowRight} from 'react-icons/fi'

const WalletSign = () => {
  return (
    <div id="wallet-sign">
        <img src={logo} alt="" />
        <h5>Sign the message in your wallet to continue</h5>
        <p>Crypter uses this signature to verify that you’re the ownerof this Ethereum address.</p>
        <span className='w-100'>
            <button>disconnect</button>
            <button>continue</button>
        </span>
        <div>
            <span>New to Ethereum?</span>
            <span>Learn about wallet <FiArrowRight size={24}/></span>
        </div>
    </div>
  )
}

export default WalletSign