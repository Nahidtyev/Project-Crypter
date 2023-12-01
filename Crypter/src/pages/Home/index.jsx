import React from 'react'
import News from './News'
import Artwork from './Artwork'
import Dream from './Dream'
import Soon from './Soon'
import Creativity from './Creativity'
import Collections from './Collections'

const Home = () => {
  return (
    <div id="home">
      <div className="container">
        <div className="row">
          <Artwork/>
          <Dream/>
          <Collections/>
          <Soon/>
          <Creativity/>
          <News/>
        </div>
      </div>
    </div>
  )
}

export default Home