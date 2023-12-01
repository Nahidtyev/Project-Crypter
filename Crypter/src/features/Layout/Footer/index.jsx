import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {RxTwitterLogo} from 'react-icons/rx'
import {CiFacebook} from 'react-icons/ci'
import {SiCodemirror} from 'react-icons/si'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className=" foot-first ">
              <div className="col-xl-6">
                  <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 2.3091C21.525 0.880039 18.4754 0.880039 16.0002 2.3091L6.67969 7.6903C4.20448 9.11936 2.67969 11.7604 2.67969 14.6185V25.3809C2.67969 28.239 4.20448 30.88 6.67969 32.3091L16.0002 37.6903C18.4754 39.1194 21.525 39.1194 24.0002 37.6903L33.3207 32.3091C35.7959 30.88 37.3207 28.239 37.3207 25.3809V14.6185C37.3207 11.7604 35.7959 9.11936 33.3207 7.6903L24.0002 2.3091ZM20.0002 29.9997C25.523 29.9997 30.0002 25.5225 30.0002 19.9997C30.0002 14.4769 25.523 9.9997 20.0002 9.9997C14.4773 9.9997 10.0002 14.4769 10.0002 19.9997C10.0002 25.5225 14.4773 29.9997 20.0002 29.9997Z" fill="#010101"/>
                      <circle cx="19.9991" cy="20.0001" r="4.44444" fill="#010101"/>
                    </svg>
                    <p>CRYPTER</p>
                  </div>
                  <p className='under-text'>Empower your creativity.</p>
              </div>
              <div className="col-xl-6">
                <div className="foot-list">
                    <ul>
                      <label>CYRPTER</label>
                      <li>Explorer</li>
                      <li>Connect wallet</li>
                      <li>Upload</li>
                      <li>How it work</li>
                    </ul>
                    <ul>
                      <label>INFO</label>
                      <li>Download</li>
                      <li>Help center</li>
                      <li>Blog</li>
                      <li>Jobs</li>
                    </ul>
                    <ul>
                      <label>SOCIAL</label>
                      <li><AiOutlineInstagram className='icon' size={24}/>Instagram</li>
                      <li><RxTwitterLogo className='icon' size={24}/>Twitter</li>
                      <li><CiFacebook className='icon' size={24}/>Facebook</li>
                      <li><SiCodemirror className='icon' size={24}/>Mirror</li>
                    </ul>
                </div>
              </div>
          </div>
          <hr />
          <div className="col-xl-12">
            <div className="foot-last">
                <span>Copyright © 2022 UI8 LLC. All rights reserved</span>
                <span>We use cookies for better service. <button>ACCEPT</button></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer