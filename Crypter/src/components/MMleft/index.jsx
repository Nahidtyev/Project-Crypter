import React from 'react'
import './mmleft.scss'
import { FaInstagram } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlineFacebook } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
const MMleft = () => {
  return (
    <div className="mm-left">
        <div className="container">
            <div className="row">
                <h1>Join our community</h1>
                <div className="media">
                    <button><FaInstagram size={20}/></button>
                    <button><RxTwitterLogo size={20}/></button>
                    <button><AiOutlineFacebook size={20}/></button>
                    <button><TiSocialLinkedinCircular size={25}/></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MMleft