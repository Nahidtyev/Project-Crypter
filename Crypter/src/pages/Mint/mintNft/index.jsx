import React from 'react'
import MintLeft from '../../../components/mintLeft'
import MintRight from '../../../components/mintRight'
import CreateNav from '../../../components/createNav'

const Mint = () => {
  return (
    <div id="mint">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <CreateNav/>
                </div>
                <div className="col-xl-6">
                  <MintLeft/>
                </div>
                <div className="col-xl-6">
                  <MintRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mint