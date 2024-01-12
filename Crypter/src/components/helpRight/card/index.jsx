import React from 'react'
import './helpcard.scss'
import { urlFor } from '../../../service/service'
const HelpCard = ({text,image}) => {
  return (
    <div className="help-card">
        <button></button>
        <div className="col-xl-5 left">
            <h1>{text}</h1>
            <p>Learn how to create and collect artwork</p>
        </div>
        <div className='col-xl-5 right'>
            <img src={urlFor(image)} alt="" />
        </div>
    </div>
  )
}

export default HelpCard