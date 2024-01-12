import React, { useState } from 'react'
import NftsCard from './nftscard';
import { useQuery } from '@tanstack/react-query';
import { client } from '../../../service/service';
import './nfts.scss'
const Nfts = () => {
    const{data} =useQuery({
        queryKey:['spotlight'],
        queryFn:()=>client.fetch(`*[_type=="spotlight"]`)
    })
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };
  return (
    <div id="nfts">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <div className="heading">
                        <h1>NFTs</h1>
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
                <div className="row g-3">
                    {data&&data.map((data,index)=>(
                        <div className="col-xl-3">
                            <NftsCard
                                key={data.index}
                                image={data.image}
                                price={data.price}
                                bid={data.bid}
                                name={data.name}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nfts