import React from 'react'
import ast from '../../../../assets/home/ast.png'
import { urlFor } from '../../../../service/service'
import './cardblock.scss'
const Cardblock = ({name,image1,image2,image3,price,owner}) => {
  return (
    <div className="card-block">
        <div className="container">
            <div className="row g-1">
                <div className="arts">
                    <img src={urlFor(image1)} className='col-xl-12' alt="" />
                    <img src={urlFor(image2)} className='col-xl-4' alt="" />
                    <img src={urlFor(image3)} className='col-xl-4' alt="" />
                    <div className="col-xl-4 idle"></div>
                </div>
                <div className="lower">
                    <div>
                        <h6>{name}</h6>
                        <span>
                            <img src={ast} alt="" />
                            <p>@{owner}</p>
                        </span>
                    </div>
                    <div>
                        <span>Floor price</span>
                        <p>{price} ETH</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cardblock