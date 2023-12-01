import React from 'react'
import bg_img from '../../assets/Profile/bg_img.png'
import './bg.scss'
const ProfileBg = () => {
  return (
    <div className="col-xl-12 bg">
            <img className='bg_img' src={bg_img} alt="" />
    </div>
  )
}

export default ProfileBg