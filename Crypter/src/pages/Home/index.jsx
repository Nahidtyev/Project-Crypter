import React from 'react'
import News from './News'
import Artwork from './Artwork'
import Dream from './Dream'
import Soon from './Soon'
import Creativity from './Creativity'
import Collections from './Collections'
import Spotlight from './Spotlight'
import Artists from './Artists'

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <Artwork/>
          <Artists/>
          <Dream/>
          <Collections/>
          <Soon/>
          <Spotlight/>
          <Creativity/>
          <News/>
        </div>
      </div>
    </div>
  )
}

export default Home