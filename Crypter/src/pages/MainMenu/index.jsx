import React from 'react'
import MMleft from '../../components/MMleft'
import MMright from '../../components/MMright'

const MainMenu = () => {
  return (
    <div className="main-menu">
        <div className="container">
            <div className="row">
                <div className="col-xl-6"><MMleft/></div>
                <div className="col-xl-6"><MMright/></div>
            </div>
        </div>
    </div>
  )
}

export default MainMenu