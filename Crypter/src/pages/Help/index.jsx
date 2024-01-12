import React from 'react'
import NavNo2 from '../../components/navNo2'
import HelpLeft from '../../components/helpLeft'
import HelpRight from '../../components/helpRight'

const Help = () => {
  return (
    <div id="help">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <NavNo2/>
                </div>
                <div className="col-xl-6">
                    <HelpLeft/>
                </div>
                <div className="col-xl-6">
                    <HelpRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Help