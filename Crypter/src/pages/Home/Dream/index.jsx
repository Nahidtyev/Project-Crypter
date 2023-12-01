import React from 'react'
import './dream.scss'
import img2 from '../../../assets/home/img2.png'
import ast from '../../../assets/home/ast.png'
import img from '../../../assets/home/img.png'
const Dream = () => {
  return (
    <div id="dream">
        <div className="container">
            <div className="row">
                <div className="col-xl-6">
                    <div className="left">
                        <span>
                            <button>
                                <img src={ast} alt="" />
                                @randomdash</button>
                            <button>
                                <img id='vaz' src={img} alt="" />
                                Escape
                            </button>
                        </span>
                        <h1>Beyond the Dream.</h1>
                        <div className="lower">
                            <div className="text">
                                <p>Buy now price</p>
                                <h5>8.00 ETH</h5>
                                <p>$24,635.39</p>
                            </div>
                            <button>MAKE OFFER</button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6">
                    <div className="right">
                        <div className="image">
                            <img src={img2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dream