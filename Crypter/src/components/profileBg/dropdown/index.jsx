import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import dash from '../../../assets/home/dash.png'
import { CgCloseR } from "react-icons/cg";
import { TbHexagonLetterO } from "react-icons/tb";

import './dropdown.scss'
import { Link } from 'react-router-dom';
const DropDown = ({name}) => {
  return (
    <div className="pp-dropdown">
        <button className='exit'></button>
        <div className=" pp">
            <img src={dash} alt="" />
            <span className='nm'><p>Dash</p>@randomdash</span>
        </div>
        <hr />
        <div id='wlt-link'>
          <p>Connected wallet</p>
          <ul>
            <li><TbHexagonLetterO color='#686A6C'/> Manage wallet</li>
            <li><CgCloseR color='#686A6C'/> Disconnect</li>
          </ul>
        </div>
        <div className='price'>
          <button>0x1e86...533B <button></button></button>
          <span><h1>3.345 ETH</h1><h1>$5,448</h1></span>
        </div>
        <div className='esy-links'>
          <div><Link to={'/profile'}><span>My profile</span><button><FiArrowRight color='#F7FBFA' size={40}/></button></Link></div><hr />
          <div><Link to={'/settings'}><span>Settings</span><button><FiArrowRight color='#F7FBFA' size={40}/></button></Link></div><hr />
          <div><Link to={'/helpcenter'}><span>Help</span><button><FiArrowRight color='#F7FBFA' size={40}/></button></Link></div>
        </div>
    </div>
  )
}

export default DropDown;