import React from 'react'
import Followers from '../../components/Followers'
import Profile from '../../components/Profile'
import ProfileBg from '../../components/profileBg'

const ProfileFollowers = () => {
    return (
        <div className="profile-crads">
            <div className="container">
                <div className="row">
                    <ProfileBg/>
                    <Profile/>
                    <div className="col-xl-6">
                       <Followers/>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default ProfileFollowers