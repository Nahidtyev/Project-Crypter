import React from 'react'
import './helplists.scss'
import { TbCircleDot } from 'react-icons/tb'
const HelpLists = () => {
  return (
    <li className='help-lists'>
            <li><TbCircleDot className='icn' size={24}/> Connect your wallet to Crypter</li>
            <li><TbCircleDot className='icn' size={24}/> Guide to collection NFT artworks on Crypter</li>
            <li><TbCircleDot className='icn' size={24}/> Marketplace balance</li>
            <li><TbCircleDot className='icn' size={24}/> Marketplace fees</li>
            <li><TbCircleDot className='icn' size={24}/> What is offer price?</li>
    </li>
  )
}

export default HelpLists