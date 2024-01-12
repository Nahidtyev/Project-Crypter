import React from 'react'
import ProfileCard from '../../../../components/profilecard'
import './card.scss'
import DateTimer from '../datetimer'

const Card = ({image}) => {
  return (
    <div className="card-soon">
      <img src={image} alt="" />
        <div className="content">
          <ProfileCard/>
          <div className='lower'>
            <div className="text">
                <p>Current bid</p>
                <h5>8.00 ETH</h5>
                <p>$24,635.39</p>
            </div>
            <DateTimer/>
          </div>
        </div>
    </div>
  )
}

export default Card