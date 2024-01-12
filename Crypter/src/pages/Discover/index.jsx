import React from 'react'
import News from '../Home/News'
import Soon from '../Home/Soon'
import Artists from '../Home/Artists'
import MostCollections from './mostcollections'
import DiscoverTop from './discovertop'
import Nfts from './nft\'s'
import './discover.scss'
const Discover = () => {
  return (
    <div id="discover">
        <div className="container">
            <div className="row">
                <DiscoverTop/>
                <Nfts/>
                <Soon/>
                <MostCollections/>
                <Artists/>
                <News/>
            </div>
        </div>
    </div>
  )
}

export default Discover