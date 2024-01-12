import React from 'react'
import helpbg from '../../../../assets/home/helpbg.png'
import './helptop.scss'
import { Link } from 'react-router-dom'
const Helptop = () => {
  return (
    <div className="help-top">
        <img src={helpbg} alt="" />
        <h1>Guide to collection NFT artworks on Crypter<br />
          <span>
            <Link to={'/helpcenter'}><button>Help center</button></Link>
            <button>Buying</button>
          </span>
        </h1>
    </div>
  )
}

export default Helptop