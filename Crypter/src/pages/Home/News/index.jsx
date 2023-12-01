import React from 'react'
import {PiGoogleLogoLight} from 'react-icons/pi'
import {AiOutlineApple} from 'react-icons/ai'
import {BsPerson} from 'react-icons/bs'
import {MdAlternateEmail} from 'react-icons/md'
import './news.scss'

const News = () => {
  return (
    <div id="news">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="left">
                        <h1>Download</h1>
                        <div>
                            <p>
                                In web3, artists are taking back ownership and control over their creativity. 
                                All collections on Crypter are creator-owned smart contracts that will stand 
                                the test of time. 
                            </p>
                            <span>
                                <button>apple store <AiOutlineApple size={24}/></button>
                                <button>google play <PiGoogleLogoLight size={24}/></button>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="right">
                        <h1>Newsletter</h1>
                            <div>
                                <p>Get the latest Crypter updates </p>
                                <div className="sub">
                                    <span><input  type="text" placeholder='Name' /> <BsPerson className='icon' size={24}/></span>
                                    <span><input type="email" placeholder='Email'/> <MdAlternateEmail className='icon' size={24}/></span>
                                </div>
                                <span>
                                    <button>SUBSCRIBE NOW</button>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default News