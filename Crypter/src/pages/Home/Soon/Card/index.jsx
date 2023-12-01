import React from 'react'
import ProfileCard from '../../../../components/profilecard'

import './card.scss'
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
            <div className="date">
                <p>Auction ends in</p>
                <h5>
                  <ul>
                    <li>23 <br /><p>hours</p></li>
                    <li>59 <br /><p>minutes</p></li>
                    <li>59 <br /><p>seconds</p></li>
                  </ul>
                </h5>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Card