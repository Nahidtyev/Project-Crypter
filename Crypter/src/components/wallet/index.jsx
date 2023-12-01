import React from 'react'
import './wallet.scss'
import fox from '../../assets/Wallet/MetaMask_Fox 1.png'
import group from '../../assets/Wallet/Group.png'
import coin from '../../assets/Wallet/Coinbase-dapp-wallet-logo 1.png'
import icon from '../../assets/Wallet/icon192.png'
import {LiaDotCircleSolid} from 'react-icons/lia'
import Cookie from '../cookie'
const Wallet = () => {
  return (
    <div id="wallet">
        <div className="head">
            <h5>Choose the wallet</h5>
            <ul className='coins'>
                <li>Ethereum</li>
                <li>Flow</li>
                <li>Solana</li>
                <li>Polygon</li>
            </ul>
            <ul className="links">
                <li><button className="wallets"><img src={fox}/> MetaMask</button></li>
                <li><button className="wallets"><img src={group}/> WalletConnect</button></li>
                <li><button className="wallets"><img src={coin}/> Coinbase Wallet</button></li>
                <li><button className="wallets"><img src={icon}/> MyEtherWallet</button></li>
            </ul>
            <div className='scan-link'>
                <LiaDotCircleSolid size={24}/>
                <span>Scan to connect</span>
            </div>
        </div>
        <Cookie/>
    </div>
  )
}

export default Wallet