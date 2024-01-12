import React from 'react'
import SettingsLeft from '../../components/settingsLeft'
import './settings.scss'
import SettingsRight from '../../components/settingsRight'
import NavNo2 from '../../components/navNo2'
const Settings = () => {
  return (
    <div id="settings">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                  <NavNo2/>
                </div>
                <div className="col-xl-6">
                  <SettingsLeft/>
                </div>
                <div className="col-xl-6">
                  <SettingsRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings