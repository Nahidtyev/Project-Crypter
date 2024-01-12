import React from 'react'
import './datetimer.scss'
const DateTimer = () => {
  return (
    <div className="date-timer">
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
  )
}

export default DateTimer