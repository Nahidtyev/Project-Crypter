import React from 'react'
import F1 from '../../assets/home/Frame1.png'
import pic from '../../assets/Collections/1.png'
import './dR.scss'

const DeployRight = () => {
  return (
    <div className="deploy-right">
         <p>Preview</p>
        <div className="card-box">
            <img className='F1' src={F1} alt="" />
            <div className='l1'>
                <img className='pic' src={pic} alt="" />
                <button>CUTE</button>
            </div>
        </div>
        <div className='under'><span>Cute Planet</span><p>0 NTF</p></div>
    </div>
  )
}

export default DeployRight