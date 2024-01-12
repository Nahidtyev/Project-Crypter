import React from 'react'
import CreateNav from '../../components/createNav'
import CreateLeft2 from '../../components/createLeft2'
import CreateRight2 from '../../components/createRight2'

const Create2 = () => {
  return (
    <div id="create-2">
    <div className="container">
      <div className="row">
        <div className="col-xl-12">
          <CreateNav/>
        </div>
        <div className="col-xl-6">
          <CreateLeft2/>
        </div>
        <div className="col-xl-6">
          <CreateRight2/>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Create2