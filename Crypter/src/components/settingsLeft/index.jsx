import React from 'react'
import { GoArrowRight } from "react-icons/go";
import { FaCheck } from "react-icons/fa6";
import pp from '../../assets/Collections/1.png'
import './settingL.scss'
import { Link } from 'react-router-dom';
const SettingsLeft = () => {
  return (
    <div className="settings-left">
        <span><h1>Settings</h1> <button>Save <FaCheck size={24}/></button></span>
        <ul>
            <li><p><Link to={'/profile'}>Profile</Link></p><Link to={'/profile'}><GoArrowRight size={24}/></Link></li>
            <li><p><Link to={'/walletmessage'}>Wallet</Link></p><Link to={'/walletmessage'}><GoArrowRight size={24}/></Link></li>
            <li><p><Link to={'/notification'}>Notification</Link></p><Link to={'/notification'}><GoArrowRight size={24}/></Link></li>
        </ul>
        <div className="pp">
            <img src={pp} alt="" />
            <p>Profile photo<span>We recommended an image of at least 800x800. Gifs work too.</span><button>upload</button></p>
        </div>
    </div>
  )
}

export default SettingsLeft