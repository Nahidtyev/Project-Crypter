import React from 'react'
import graphic from '../../../assets/home/graphic.png'
import img from '../../../assets/home/img.png'
import {LiaDotCircle} from 'react-icons/lia'
import {BiRightArrowAlt} from 'react-icons/bi'
import './artwork.scss'

const Artwork = () => {
  return (
    <div id="artwork">
      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <div className="curated">
              <h1>Curated<br />Artwork.</h1>
              <img src={graphic} alt="" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="curated-right">
              <p>We are laying the groundwork for web3 — the next generation of 
                the internet full of limitless possibilities.
              </p>
              <span>start your search <LiaDotCircle size={24} color='#A6AEAD'/></span>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="image">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="col-xl-6">
              <div className="right">
                <div className="info">
                  <span>
                    <p>Collection</p>
                    <span><LiaDotCircle size={24} color='#A6AEAD'/> Escape II</span>
                  </span>
                  <span>
                    <p>Buy now</p>
                    <span><LiaDotCircle size={24} color='#A6AEAD'/> 10.00 ETH</span>
                  </span>
                  <span>
                    <p>Reserve</p>
                    <span><LiaDotCircle size={24} color='#A6AEAD'/> 2.38 ETH</span>
                  </span>
                </div>
                <div className="lower">
                  <h1>The creator network.</h1>
                  <div>
                    <span>
                      <button>View NFT <BiRightArrowAlt size={24}/></button>
                      <button>place a bid</button>
                    </span>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artwork