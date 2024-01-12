import React from 'react'
import CreateNav from '../../../components/createNav'
import MintRight from '../../../components/mintRight'
import MintW from '../../../components/mintWallet'
const MintWallet = () => {
  return (
    <div id="mint-wallet">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <CreateNav/>
                </div>
                <div className="col-xl-6">
                    <MintW/>
                </div>
                <div className="col-xl-6">
                    <MintRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MintWallet