import React from 'react'
import {PiGoogleLogoLight} from 'react-icons/pi'
import {AiOutlineApple} from 'react-icons/ai'
import { FaArrowRight } from "react-icons/fa6";
import './mmright.scss'
const MMright = () => {
  return (
    <div className="mm-right">
      <div className="container">
        <div className="row">
            <div className='quick-links'>
                <div><span>Discover</span><FaArrowRight className='arr-icon'/></div><hr />
                <div><span>Create</span><FaArrowRight className='arr-icon'/></div><hr />
                <div><span>Feed</span><FaArrowRight className='arr-icon'/></div><hr />
                <div><span>Help Center</span><FaArrowRight className='arr-icon'/></div><hr />
                <div><span>Blog</span><FaArrowRight className='arr-icon' /></div><hr />
            </div>  
            <div className="download">
              <h3>Download app</h3>
              <span>
                  <button>apple store <AiOutlineApple size={24}/></button>
                  <button>google play <PiGoogleLogoLight size={24}/></button>
              </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MMright