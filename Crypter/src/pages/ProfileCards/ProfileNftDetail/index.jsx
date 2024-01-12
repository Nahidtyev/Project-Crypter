import React, { useEffect, useState } from 'react'
import NavNo2 from '../../../components/navNo2/index'
import { useParams } from 'react-router-dom';
import { client } from '../../../service/service';
import ProfileNDLeft from '../../../components/ProfileNDLeft';
const ProfileNftDetail = () => {
    const {nftId} = useParams();
    const [nfter, setNft] = useState('');
    useEffect(() => {
        client.fetch(`*[_type == "createdcard" && _id == "${nftId}"]`)
        .then((res) => {
            console.log(res);
            if (res && res.length > 0) {
            setNft([res[0]]);
            console.log();
            }
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, [nftId]);
  return (
    <div id="profile-nft-detail">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <NavNo2/>
                </div>
                <div className="col-xl-6">
                {nfter && nfter.map((data,index)=>(
                    <ProfileNDLeft
                       key={data.index}
                       image={data.image}
                       name={data.name}
                       description={data.description}
                    />
                   ))}
                </div>
                <div className="col-xl-6"></div>
            </div>
        </div>
    </div>
  )
}

export default ProfileNftDetail