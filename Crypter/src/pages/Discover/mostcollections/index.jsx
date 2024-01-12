import React, { useState } from 'react'
import Mostcard from './MostCard'
import './mostcol.scss'
import { useQuery } from '@tanstack/react-query'
import { client } from '../../../service/service'
const MostCollections = () => {
    const {data} = useQuery({
        queryKey: ["collections"],
        queryFn : () => client.fetch(`*[_type =="collections"]`),
    })
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };
  return (
    <div id="mostcollections">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="heading">
                        <h1>Most activity <br /> collections.</h1>
                        <div className="filters">
                            <button className={selectedButton === 0 ? 'active' : ''}
                                onClick={() => handleButtonClick(0)}>
                                    1 days
                            </button>
                            <button className={selectedButton === 1 ? 'active' : ''}
                                onClick={() => handleButtonClick(1)}>
                                7 days
                            </button>
                            <button className={selectedButton === 2 ? 'active' : ''}
                                onClick={() => handleButtonClick(2)}>
                                30 days
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-xl-12 carding">
                    <div className="row g-3">
                    {data && data.map((data,index)=>(
                        <div className="col-xl-6">
                            <Mostcard
                                index={data.index}
                                image1={data.image1}
                                image2={data.image2}
                                image3={data.image3}
                                price={data.price}
                                owner={data.owner}
                                name={data.name}
                                />
                        </div>
                    ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MostCollections