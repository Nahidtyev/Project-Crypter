import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { client } from '../../service/service';
import { FiSun } from 'react-icons/fi';
import { MdOutlineWindow } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import './right.scss';
import CollectionCard from './CollectionCard';
import CreatedCard from './CreatedCard';


const ProfileRight = () => {
  const [selectedCardType, setSelectedCardType] = useState('CreatedCard'); 

  const { data } = useQuery({
 queryKey: ["createdcard"],
 queryFn: () => client.fetch(`*[_type =="createdcard"]`),
});

const { delta } = useQuery({
 queryKey: ["collectioncard"],
 queryFn: () => client.fetch(`*[_type =="collectioncard"]`),
});

  const showCreatedCard = () => {
    setSelectedCardType('CreatedCard');
  };

  const showCollectionCard = () => {
    setSelectedCardType('CollectionCard');
  };

  return (
    <div id="profile-right">
      <ul className='secs'>
        <li onClick={showCreatedCard}>Created <button>256</button></li>
        <li onClick={showCollectionCard}>Collection <button>4</button></li>
        <li>Owned <button>16</button></li>
      </ul>
      <div className="filter">
        <span>Collected by </span>
        <span>
          <AiOutlineMenu size={20} />
          <MdOutlineWindow size={20} />
          <FiSun size={20} />
        </span>
      </div>
        <div className="row">
        {selectedCardType === 'CollectionCard' && delta &&
            delta.map((collectionData, index) => (
              console.log(delta),
              <div className="col-xl-12 carding" key={index}>
                {collectionData && collectionData.name && collectionData.image && collectionData.floor && (
                  <CollectionCard
                    name={collectionData.name}
                    image={collectionData.image}
                    floor={collectionData.floor}
                  />
                )}
              </div>
            ))
          }
        {selectedCardType === 'CreatedCard' && data &&
          data.map((createdData, index) => (
            <div className="col-xl-6 carding" key={index}>
              <CreatedCard
                name={createdData.name}
                image={createdData.image}
                price={createdData.price}
              />
            </div>
          ))
        }
        </div>
    </div>
  )
}

export default ProfileRight;
