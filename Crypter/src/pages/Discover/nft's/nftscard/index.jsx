import React from 'react'
import { urlFor } from '../../../../service/service'
import './nftscard.scss'
const NftsCard = ({image,name,price,bid}) => {
  return (
    <div className="nfts-card">
        <img src={urlFor(image)} alt="" className="col-xl-12" />
        <div className="fl">
            <p><img src="" alt="" />@{name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4017 1.38527C12.9166 0.527828 11.0868 0.527828 9.60168 1.38527L4.00937 4.61398C2.52425 5.47142 1.60938 7.05603 1.60938 8.77091V15.2283C1.60938 16.9432 2.52425 18.5278 4.00937 19.3853L9.60168 22.614C11.0868 23.4714 12.9166 23.4714 14.4017 22.614L19.994 19.3853C21.4791 18.5278 22.394 16.9432 22.394 15.2283V8.77091C22.394 7.05603 21.4791 5.47142 19.994 4.61398L14.4017 1.38527ZM12.0017 17.9996C15.3154 17.9996 18.0017 15.3133 18.0017 11.9996C18.0017 8.68592 15.3154 5.99962 12.0017 5.99962C8.68797 5.99962 6.00168 8.68592 6.00168 11.9996C6.00168 15.3133 8.68797 17.9996 12.0017 17.9996Z" fill="url(#paint0_angular_746_22109)"/>
                <circle cx="11.9984" cy="12.0004" r="1.8" stroke="#202025" stroke-width="3.6"/>
                <defs>
                    <radialGradient id="paint0_angular_746_22109" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.0017 11.9996) rotate(90) scale(11.2574 10.3923)">
                    <stop offset="0.0617363" stop-color="#FFE249"/>
                    <stop offset="0.217045" stop-color="#F35950"/>
                    <stop offset="0.441667" stop-color="#7C5BFF"/>
                    <stop offset="0.562007" stop-color="#1CE4FF"/>
                    <stop offset="0.948166" stop-color="#5FFF5C"/>
                    </radialGradient>
                </defs>
            </svg>
        </div><hr />
        <div className="lower">
            <span>Current bid <br /><p>{bid}ETH</p></span>
            <span>Buy now <br /><p>{price}ETH</p></span>
        </div>
    </div>
  )
}

export default NftsCard