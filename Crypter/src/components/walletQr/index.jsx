import React from 'react'
import qr from '../../assets/Wallet/barcode-qr 1.png'
import Cookie from '../cookie'
import {Link} from 'react-router-dom'
import './qr.scss'

const WalletQr = () => {
  return (
    <div id="wallet-qr">
        <div className="head">
            <h5>Scan to connect</h5>
            <div className="qr">
                <img src={qr} alt="" />
            </div>
            <div className='under'>
                <p>Powered by UI8</p>
                <span><Link to={'/wallet'}>Don’t have a wallet app?</Link></span>
            </div>
        </div>
        <Cookie/>
    </div>
  )
}

export default WalletQr