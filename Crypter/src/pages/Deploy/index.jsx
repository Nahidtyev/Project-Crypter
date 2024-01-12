import React from 'react'
import CreateNav from '../../components/createNav'
import Deployleft from '../../components/deployLeft'
import DeployRight from '../../components/deployRight'

const Deploy = () => {
  return (
    <div id="deploy">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <CreateNav/>
                </div>
                <div className="col-xl-6">
                    <Deployleft/>
                </div>
                <div className="col-xl-6">
                    <DeployRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deploy