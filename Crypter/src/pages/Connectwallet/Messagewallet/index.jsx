import React from 'react'
import WalletLeft from '../../../components/walletleft'
import WalletSign from '../../../components/walletSign'
import './message.scss'
const Messagewallet = () => {
  return (
    <div id="message-wallet">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <WalletLeft/>
          </div>
          <div className="col-xl-6">
            <WalletSign/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messagewallet