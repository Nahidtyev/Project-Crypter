import React from 'react'
import {CiSearch} from 'react-icons/ci'
import './rankleft.scss'
const RankingLeft = () => {
  return (
    <div className="ranking-left">
        <h1>Artist <br /><span>of the</span> week</h1>
        <div>
          <div className='bottom'>
              <input type="text" />
              <CiSearch size={24}/>
          </div><hr />
        </div>
    </div>
  )
}

export default RankingLeft