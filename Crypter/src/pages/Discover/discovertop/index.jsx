import React from 'react'
import DateTimer from '../../Home/Soon/datetimer'
import img from '../../../assets/Collections/5.png'
import ast from '../../../assets/home/ast.png'
import { GoArrowRight } from "react-icons/go";
import './discotop.scss'
import { Link } from 'react-router-dom';
const DiscoverTop = () => {
  return (
    <div id="discover-top">
        <div className="container">
            <div className="row">
                <div className="main-div">
                    <img src={img} alt="" />
                    <div className="left">
                        <div className="nam">
                            <h1>D-O-G</h1>
                            <span>
                                <img src={ast} alt="" />
                                @randomdash
                            </span>
                        </div>
                        <div>
                            <button><Link to={'/profile'}>View NFT <GoArrowRight size={24}/></Link></button>
                            <button><Link to={'/create'}>place a bid</Link></button>
                        </div>
                    </div>
                    <DateTimer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DiscoverTop