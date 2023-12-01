import React from 'react'
import WalletLeft from '../../../components/walletleft'
import Wallet from '../../../components/wallet'

const Connectwallet = () => {
  return (
    <div id="connect-wallet">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <WalletLeft/>
          </div>
          <div className="col-xl-6">
            <Wallet/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connectwallet