import React from 'react'
import { CiSearch } from "react-icons/ci";
import './helpL.scss'
const HelpLeft = () => {
  return (
    <div className="help-left">
        <div className="top">
            <h1>Help center</h1>
            <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. </p>
        </div>
        <div>
          <div className='bottom'>
              <input type="text" />
              <CiSearch size={24}/>
          </div><hr />
        </div>
    </div>
  )
}

export default HelpLeft