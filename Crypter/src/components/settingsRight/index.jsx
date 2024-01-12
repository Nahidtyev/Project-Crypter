import React from 'react'
import { MdAlternateEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { RxDropdownMenu } from "react-icons/rx";
import { RiLinksFill } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { LiaFacebookSquare } from "react-icons/lia";
import { BsSuitDiamondFill } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import { GoCopy } from "react-icons/go";
import {Link} from 'react-router-dom'
import './settingR.scss'
const SettingsRight = () => {
  return (
    <div className="setting-right">
      <ul>
        <li><label>information</label></li>
        <li>
          <span><input type="text" /><MdAlternateEmail size={24}/></span><hr />
          <label>Email</label>
        </li>
        <li>
          <span><input type="text" /><BsPerson size={24}/></span><hr />
          <label>Display name</label>
        </li>
        <li>
          <span><p>About</p><RxDropdownMenu size={24}/></span>
        </li>
      </ul>
      <ul>
        <li><label>links</label></li>
        <li>
          <span><input type="text" /><RiLinksFill size={24}/></span><hr />
          <label>Website</label>
        </li>
        <li>
        <span><input type="text" /><CiTwitter size={24}/></span><hr />
          <label>Twitter</label>
        </li>
        <li>
        <span><input type="text" /><LiaFacebookSquare size={24}/></span><hr />
          <label>Facebook</label>
        </li>
      </ul>
      <div className="wallet-link">
        <label>Wallet</label>
        <div className='link-detail'>
          <div className='link-cyrpto'>
            <button className='cyrpto-icn'><BsSuitDiamondFill size={35}/></button>
            <p>0x1e862Be555a66Ea69....533B <GoCopy size={24}/><br /><span>Etherium</span></p>
          </div>
          <button className='exit-icn'><RxExit size={24}/></button>
        </div>
        <Link to={'/wallet'}><button>link wallet</button></Link>
      </div>
      <ul className='notif-btns'>
        <li><label>notification</label></li>
        <li>
          <span><p>Auction notification<br /><span>Amet nesciunt voluptas quas cum sequi a pariatur harum.</span></p>
          <div className="toogle">
             <input type="checkbox" id="switch1" /><label for="switch1">Toggle</label>
          </div></span><hr />
        </li>
        <li>
          <span><p>Buy now notification<br /><span>Dolorem vitae ratione aut assumenda accusamus.</span></p>
          <div className="toogle">
             <input type="checkbox" id="switch2" /><label for="switch2">Toggle</label>
          </div></span><hr />
        </li>
        <li>
          <span><p>Offer notification<br /><span>Qui nulla fuga omnis aperiam nostrum excepturi asperiores.</span></p>
          <div className="toogle">
             <input type="checkbox" id="switch3" /><label for="switch3">Toggle</label>
          </div></span><hr />
        </li>
        <li>
          <span><p>Crypter news<br /><span>Placeat quo qui cum ea nisi optio.</span></p>
          <div className="toogle">
             <input type="checkbox" id="switch4" /><label for="switch4">Toggle</label>
          </div></span><hr />
        </li>
      </ul>
    </div>
  )
}

export default SettingsRight