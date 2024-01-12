import React from 'react'
import ActivityRight from '../NotifActivity/activityright/index'
import { TbCopy } from "react-icons/tb";
import ShareRight from './Right';
import './share.scss'
import { IoCloseOutline } from 'react-icons/io5';
const Share = () => {
    const handleClose = () => {
        window.location.reload();
      };
  return (
    <div className="share">
        <div className="container">
            <div className="row">
               <button onClick={handleClose} id='close'><IoCloseOutline size={24}/></button>
                <div className="col-xl-6">
                    <ActivityRight/>
                    <span className='cp-link'><p>https://crypter.ui8.net/nft/escape</p> <TbCopy size={24}/></span>
                </div>
                <div className="col-xl-6">
                    <ShareRight/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Share