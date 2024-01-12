import React, { useState } from 'react'
import './rankright.scss'
import { useQuery } from '@tanstack/react-query';
import { client } from '../../service/service';
import RankCard from './rankcard';
const RankingRight = () => {
  const {data} = useQuery({
    queryKey: ["artists"],
    queryFn: () => client.fetch(`*[_type=="artists"]`)
  })

  if (!data || !Array.isArray(data)) {
    return ;
  }
  const sortedData = data.slice().sort((a, b) => a.number - b.number);

  const [selectedButton, setSelectedButton] = useState(null);
    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };
  return (
    <div className="ranking-right">
        <div className="filters">
            <button className={selectedButton === 0 ? 'active' : ''}
              onClick={() => handleButtonClick(0)}>Artist
            </button>
            <button className={selectedButton === 1 ? 'active' : ''}
              onClick={() => handleButtonClick(1)}>Collector
            </button>
            <button className={selectedButton === 2 ? 'active' : ''}
              onClick={() => handleButtonClick(2)}>1 days
            </button>
            <button className={selectedButton === 3 ? 'active' : ''}
              onClick={() => handleButtonClick(3)}>7 days
            </button>
            <button className={selectedButton === 4 ? 'active' : ''}
              onClick={() => handleButtonClick(4)}>30 days
            </button>
        </div>
        <div className="carding">
            {sortedData&&sortedData.map((data,index)=>(
                    <div key={index}>
                      <RankCard
                        name={data.name}
                        sale={data.sale}
                        image={data.image}
                        number={data.number}
                        price={data.price}
                        volume={data.volume}
                      />
                    </div>
                  ))}
        </div>
    </div>
  )
}

export default RankingRight