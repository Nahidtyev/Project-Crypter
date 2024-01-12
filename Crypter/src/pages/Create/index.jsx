import React from 'react'
import CreateNav from '../../components/createNav'
import CreateLeft1 from '../../components/createLeft1'
import CreateRight1 from '../../components/createRight1'
import CreateLeft2 from '../../components/createLeft2'
const Create = () => {
  
  return (
    <div id="create">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <CreateNav/>
          </div>
          <div className="col-xl-6">
            <CreateLeft1/>
          </div>
          <div className="col-xl-6">
            <CreateRight1/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create