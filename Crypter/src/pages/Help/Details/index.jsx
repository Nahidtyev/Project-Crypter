import React, { useEffect, useState } from 'react'
import Helptop from './top'
import HelperDetails from '../../../components/helperdetails'


const HelpDetailsAll = () => {
    return (
      <div id="help-details-all">
          <div className="container">
              <div className="row">
                  <Helptop/>
                  <HelperDetails/>
              </div>
          </div>
      </div>
    )
  }

export default HelpDetailsAll