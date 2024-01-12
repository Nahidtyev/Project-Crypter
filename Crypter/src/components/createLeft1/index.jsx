import React from 'react'
import grp from '../../assets/home/graphic.png'
import './cL1.scss'
const CreateLeft1 = () => {
  return (
    <div className="create-left1">
      <div className="top">
        <h1>Create on <br /> Crypter.</h1>
        <img src={grp} alt="" />
      </div>
      <div className="bottom">
        <p>We are laying the groundwork for web3 — the next generation of the internet full of limitless possibilities. 
          Join the millions of creators, collectors, and curators who are on this journey with you.
        </p>
      </div>
    </div>
  )
}

export default CreateLeft1