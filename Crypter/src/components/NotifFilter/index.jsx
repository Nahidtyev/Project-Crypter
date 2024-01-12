import React, { useState } from 'react'
import './notiffilter.scss'
const NotifFilter = () => {
    const [isChecked, setIsChecked] = useState(false);
  const handleCheck = (isChecked) => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
    setIsChecked(isChecked);
  };
  const handleClear = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
    setIsChecked(false);
  };
  return (
    <div className="notif-filter">
        <div className="container">
            <div className="row">
                <h1>Filters</h1>
                <div className="cats row ">
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="sales" id="sales" /> <label>Sales</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="followers" id="followers" /> <label>Followers</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="listing" id="listing" /> <label>Listing</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="mint" id="mint" /> <label>Mint</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="bids" id="bids" /> <label>Bids</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="purchase" id="purchase" /> <label>Purchase</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="burns" id="burns" /> <label>Burns</label></span>
                    <span className='col-xl-6'><input className="form-check-input" type="checkbox" name="transfers" id="transfers" /> <label>transfers</label></span>
                </div>
                <div className='slcts'>
                    <button onClick={() => handleCheck(true)}>select all</button>
                    <button onClick={handleClear}>deselect all</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NotifFilter