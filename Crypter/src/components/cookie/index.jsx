import React from 'react'
import './cookie.scss'
import { Link } from 'react-router-dom'
const Cookie = () => {
  return (
    <button className='cookie'>
            <span>We use 🍪 <span className='dif'>cookies</span> for better experience</span>
            <span className='dif'><Link to={'/walletmessage'}>Accept</Link></span>
   </button>
  )
}

export default Cookie