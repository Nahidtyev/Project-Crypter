import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './notifcard.scss'
import { urlFor } from '../../../service/service'
const Card = ({name,image}) => {
  const [clicked,setChecked]=useState(false);

  const handleClick=()=>{
    setChecked(!clicked);
  }
  return (
    <div className="notif-card row">
        <div className="col-xl-8 pp">
            <img src={urlFor(image)} alt="" />
            <span className='nm'><p><span>@{name}</span>  followed you</p>Aug 17</span>
        </div>
        <div className="col-xl-4">
           <button  className={`click-button ${clicked ? 'clicked' : ''}`} onClick={handleClick}>follow <AiOutlinePlus size={24}/></button>
        </div>
        <hr />
    </div>
  )
}

export default Card