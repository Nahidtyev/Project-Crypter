import React from 'react'
import ast from '../../../../assets/home/ast.png'
import { urlFor } from '../../../../service/service'
import './mostcard.scss'
const Mostcard = ({name,image1,image2,image3,price,owner}) => {
    return (
        <div className="most-card">
            <div className="container">
                <div className="row g-1">
                    <div className="arts">
                        <img src={urlFor(image1)} className='col-xl-9 bigger' alt="" />
                        <div className="col-xl-2 right">
                            <img src={urlFor(image2)} className='smaller'  alt="" />
                            <img src={urlFor(image3)} className='smaller'  alt="" />
                            <div className="smaller idle"></div>
                        </div>
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
                            <p className='prc'>{price} ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
}

export default Mostcard