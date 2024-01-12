import React from 'react'
import Card from './Card'
import './soon.scss'
import frame from '../../../assets/home/Frame.png'
import frame1 from '../../../assets/home/Frame1.png'
import {Link} from 'react-router-dom'
const Soon = () => {
  return (
    <div id="soon">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 ">
                    <div className="soon-left">
                        <h1>Auctions ending soon</h1>
                        <button><Link to={'/discover'}>explorer more <button>109</button></Link></button>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="soon-right">
                        <Card image={frame}/>
                        <Card image={frame1}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Soon