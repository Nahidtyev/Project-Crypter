import React, { useState } from 'react'
import './cR1.scss'
import { Link } from 'react-router-dom'
const CreateRight1 = () => {
  return (
    <div className="create-right1">
        <div className='head'>
            <p>Your collection</p>
            <button>0</button>
        </div>
        <div className='create-btn'>
            <Link to={"/create-2"}><button>+</button></Link>
            <span>Create new collection</span>
            <p>Deploy a smart contract to mint your NFTs.</p>
        </div>
        <div className='row empty-item'>
            <button className='col-xl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                    <g opacity="0.3">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 12.5333C4.5 9.54639 4.5 8.05292 5.08129 6.91205C5.59263 5.90852 6.40852 5.09263 7.41205 4.58129C8.55292 4 10.0464 4 13.0333 4H19.9667C22.9536 4 24.4471 4 25.588 4.58129C26.5915 5.09263 27.4073 5.90852 27.9187 6.91205C28.5 8.05292 28.5 9.54639 28.5 12.5333V17.2269C28.5 17.8673 28.5 18.1876 28.3663 18.3656C28.2497 18.5207 28.0715 18.6172 27.878 18.6301C27.6559 18.6451 27.3876 18.4703 26.8509 18.1205L23.0575 15.6484L22.9296 15.5649C22.4021 15.2195 21.8728 14.8728 21.2732 14.7399C20.7511 14.624 20.2088 14.6355 19.692 14.7735C19.0987 14.9317 18.5847 15.3005 18.0723 15.6681L17.9481 15.7571L14.6072 18.1424C13.9684 18.5985 13.8892 18.6351 13.8349 18.6517C13.7434 18.6799 13.6469 18.688 13.552 18.6755C13.4958 18.668 13.4116 18.6452 12.7057 18.3017L12.0013 17.9588L11.8904 17.9047C11.4255 17.6775 10.958 17.4488 10.4495 17.3715C10.0057 17.304 9.55281 17.3268 9.11803 17.4387C8.61993 17.5668 8.17781 17.8413 7.73821 18.1143L7.63336 18.1793L5.05308 19.7748C4.81155 19.9241 4.5 19.7507 4.5 19.4667V12.5333ZM5.16029 22.8437C4.95384 22.9715 4.8506 23.0353 4.7766 23.1311C4.71563 23.21 4.66587 23.322 4.64813 23.4201C4.62661 23.5392 4.64581 23.6445 4.68423 23.8549C4.77021 24.3261 4.89632 24.7249 5.08129 25.088C5.59263 26.0915 6.40852 26.9073 7.41205 27.4187C8.55292 28 10.0464 28 13.0333 28H19.9667C22.9536 28 24.4471 28 25.588 27.4187C26.5915 26.9073 27.4073 26.0915 27.9187 25.088C28.21 24.5163 28.3553 23.856 28.4279 22.9637C28.4448 22.7549 28.4532 22.6507 28.4273 22.5453C28.4052 22.4555 28.3597 22.3627 28.3021 22.2901C28.2348 22.2053 28.1415 22.1444 27.9548 22.0228L21.6015 17.8825C20.8513 17.3937 20.7571 17.3568 20.6959 17.3432C20.5913 17.32 20.4829 17.3224 20.3796 17.3499C20.3189 17.3661 20.2264 17.4071 19.4976 17.9273L16.1568 20.3127L16.0485 20.3903C15.5968 20.714 15.1429 21.0396 14.6183 21.2008C14.1607 21.3415 13.6782 21.3819 13.2036 21.3193C12.6595 21.2476 12.1577 21.0021 11.6585 20.758L11.5388 20.6995L10.8343 20.3567C10.1789 20.0376 10.1015 20.0159 10.0487 20.0079C9.95989 19.9944 9.86931 19.9989 9.78236 20.0213C9.73059 20.0347 9.65581 20.064 9.0358 20.4475L5.16029 22.8437ZM15.1667 12C15.1667 13.4728 13.9728 14.6667 12.5 14.6667C11.0272 14.6667 9.83333 13.4728 9.83333 12C9.83333 10.5272 11.0272 9.33333 12.5 9.33333C13.9728 9.33333 15.1667 10.5272 15.1667 12Z" fill="#A6AEAD"/>
                    </g>
                </svg>
            </button>
            <div className='col-xl-5'>
                <span className="placeholder col-12 bg-secondary rounded-2"></span>
                <span className="placeholder col-10 bg-secondary rounded-2"></span>
            </div>
        </div>
    </div>
  )
}

export default CreateRight1