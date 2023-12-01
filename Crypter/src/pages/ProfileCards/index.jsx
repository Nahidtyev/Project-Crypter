import React from 'react'
import ProfileRight from '../../components/ProfileRight'
import Profile from '../../components/Profile'
import ProfileBg from '../../components/profileBg'

const ProfileCards = () => {
  return (
    <div className="profile-crads">
        <div className="container">
            <div className="row">
                <ProfileBg/>
                <Profile/>
                <div className="col-xl-6">
                   <ProfileRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileCards