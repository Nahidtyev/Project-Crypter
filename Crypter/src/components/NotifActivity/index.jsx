import React, { useEffect, useState } from 'react'
import Card from './Card';
import { client } from '../../service/service';
import { useParams } from 'react-router-dom';
import './notifactivity.scss'

const NotifActivity = () => {
  const {notifId} = useParams();
  const [notif, setNotif] = useState('');
  useEffect(() => {
    client.fetch(`*[_type == "follower" && _id == "${notifId}"]`)
      .then((res) => {
        console.log(res);
        if (res && res.length > 0) {
          setNotif([res[0]]);
          console.log();
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [notifId]);

  return (
    <div className="notif-activity">
      <div className="container">
        <div className="row justify-content-center">
              <ul className='secs'>
                <li >Notification <button>24</button></li>
                <li >Activity <button>0</button></li>
              </ul>
              <div className='hd'>
                <h1>1 Offer</h1>
              </div>
              <div className="row">
              {
                notif&&notif.map((data,index)=>(
                  <Card
                  key={data.index}
                  image={data.image}
                  price={data.price}
                  name={data.name}
                  />
                ))
              }
              </div>
        </div>
      </div>
    </div>
  )
}

export default NotifActivity