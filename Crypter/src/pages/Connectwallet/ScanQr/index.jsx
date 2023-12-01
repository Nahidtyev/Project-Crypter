import React from 'react'
import './scanqr.scss'
import WalletLeft from '../../../components/walletleft'
import WalletQr from '../../../components/walletQr'
const ScanQr = () => {
  return (
    <div id="scan-wallet">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <WalletLeft/>
          </div>
          <div className="col-xl-6">
            <WalletQr/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScanQr