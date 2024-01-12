import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import './followcard.scss'
import { urlFor } from '../../../service/service'
const Card = ({name,image,price}) => {
  const [clicked,setChecked]=useState(false);

  const handleClick=()=>{
    setChecked(!clicked);
  }
  return (
    <div className="follower-card row">
        <div className="col-xl-4 pp">
            <img src={urlFor(image)} alt="" />
            <span className='nm'><p>{name}</p>@{name}</span>
        </div>
        <div className="col-xl-4">
            <span className='pr'>Created<p>{price}NFTs</p></span>
        </div>
        <div className="col-xl-4">
           <button className={`click-button ${clicked ? 'clicked' : ''}`} onClick={handleClick}>follow <AiOutlinePlus size={24}/></button>
        </div>
        <hr />
    </div>
  )
}

export default Card