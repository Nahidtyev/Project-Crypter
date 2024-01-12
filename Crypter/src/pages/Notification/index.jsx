import React from 'react'
import ProfileBg from '../../components/profileBg'
import Notif from '../../components/Notif'
import NotifFilter from '../../components/NotifFilter'
import './notification.scss'
const Notification = () => {
  return (
    <div id="notification">
      <div className="container">
        <div className="row">
          <ProfileBg/>
          <div className="col-xl-6">
            <Notif/>
          </div>
          <div className="col-xl-6">
            <NotifFilter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Notification