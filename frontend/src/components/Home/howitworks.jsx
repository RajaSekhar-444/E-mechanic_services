import React from 'react'
import {FaUserPlus} from 'react-icons/fa'
import {MdFindInPage} from 'react-icons/md'
import {IoMdSend} from 'react-icons/io'
const Howitworks = () => {
  return (
    <div className='howitworks'>
      <div className="container">
        <h3>How MechGo Works</h3>
        <div className="banner">
          <div className="card">
            <FaUserPlus />
            <p>Create Account</p>
            <p>Users are suggested to create their in order to proceed with their respective activities through our platform..</p>
          </div>
          <div className="card">
            <MdFindInPage />
            <p>Post a Request/Accept a Request</p>
            <p>Then according to their roles they will  be kept in a place to accept/raise a request through which the care for you and your vehicle begins</p>
          </div>
          <div className="card">
            <IoMdSend />
            <p>Repairing process will begin</p>
            <p>Now the requests will be suspected closely and the status will be updated according to the situation </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Howitworks