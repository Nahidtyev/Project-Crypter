import React from 'react'
import c1 from '../../../assets/createdcard/c1.png'
import img2 from '../../../assets/home/img2.png'
import './activityR.scss'
const ActivityRight = () => {
  return (
    <div className="activity-right">
        <img id='c1' src={c1} className='col-xl-12' alt="" />
        <div className='date'>
            <h1>Escape</h1>
            <h1>23 <sup>h</sup> 40 <sup>m</sup></h1>
        </div>
        <div className='sm-block'>
            <img id='img2' src={img2} alt="" />
            <p>Cute Planet <br /><span>12 NFT's</span></p>
        </div>
    </div>
  )
}

export default ActivityRight