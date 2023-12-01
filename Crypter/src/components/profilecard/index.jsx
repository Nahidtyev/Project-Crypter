import React from 'react'
import ast from '../../assets/home/ast.png'
import './card.scss'
const ProfileCard = () => {
  return (
    <div className="profile-card">
        <button>
            <img src={ast} alt="" />
            @randomdash
        </button>
    </div>
  )
}

export default ProfileCard