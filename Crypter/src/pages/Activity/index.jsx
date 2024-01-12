import React from 'react'
import ProfileBg from '../../components/profileBg';
import NotifActivity from '../../components/NotifActivity';

import './activity.scss'
import ActivityRight from '../../components/NotifActivity/activityright';

const Activity = () => {
    return (
        <div id="activity">
          <div className="container">
            <div className="row">
              <ProfileBg/>
              <div className="col-xl-6">
                <NotifActivity/>
              </div>
              <div className="col-xl-6">
                 <ActivityRight/>
              </div>
            </div>
          </div>
        </div>
      )
}

export default Activity;