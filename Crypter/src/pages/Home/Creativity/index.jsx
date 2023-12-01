import React from 'react'
import './creativity.scss'
import collect from '../../../assets/home/collection.png'
import pig from '../../../assets/home/pig.png'
import calc from '../../../assets/home/calc.png'

const Creativity = () => {
  return (
    <div id="creativity">
        <div className="container">
            <div className="row">
                <div className="heading">
                    <h1>Own your creativity.</h1>
                    <p>Each web3 community is unique and deserves a custom marketplace with its own look, features, fees.</p>
                </div>
                <div className="line">
                    <div className="col-xl-6">
                        <div className="imaging">
                            <img src={collect} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="info">
                            <h1>Your Collection, your way.</h1>
                            <p>In web3, artists are taking back ownership and control over their creativity. 
                                All collections on Crypter are creator-owned smart contracts that will stand the test of time.</p>
                            <button>learn more</button>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="col-xl-6">
                        <div className="info">
                            <h1>Lowest mint fees</h1>
                            <p>Minting an NFT is like adding your signature to a painting. Make your mark in web3 with works that are emblematic 
                                of your creative practice.<br /> Plus, you’ll earn a 10% royalty for all secondary market sales. Forever.</p>
                            <button>learn more</button>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="imaging">
                            <img src={pig} alt="" />
                        </div>
                    </div>
                </div>
                <div className="line">
                    <div className="col-xl-6">
                        <div className="imaging">
                            <img src={calc} alt="" />
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="info">
                            <h1>Create together, earn together.</h1>
                            <p>Add a Split to your NFT to seamlessly pay creative collaborators—photographers, producers, choreographers, dancers, poets—and so on. <br />
                                You can also use Splits to donate directly to the causes you care about most. That’s the web3 way.</p>
                            <button>learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Creativity