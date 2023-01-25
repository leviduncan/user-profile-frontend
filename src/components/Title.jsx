import React from 'react'
import { Link } from 'react-router-dom'

const Title = (props) => {
  const { userAmt, page } = props
  return (
    <>
      {
      page === "show" && 
      <div className="title">
        <h2 className='fw-900 d-flex'>
          <strong>People </strong>
          <span className='num'>{userAmt}</span>
        </h2>
        <div>
          <Link to='/create-user' className="btn btn-purple-va">+ Add a New Employee</Link>
        </div>
      </div>}
      {page === "create" && 
        <div className="title">
          <h2 className='fw-900 d-flex'>
            <strong>Create a User</strong>
          </h2>
          <div>
            <Link to='/' className="btn btn-purple-va"> Show User List</Link>
          </div>
      </div>
      }
      {page === "edit" && 
        <div className="title">
          <h2 className='fw-900 d-flex'>
            <strong>Update User Information</strong>
          </h2>
          <div>
            <Link to='/' className="btn btn-purple-va"> Show User List</Link>
          </div>
      </div>
      }
    </>
  )
}

export default Title