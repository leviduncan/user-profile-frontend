import React from 'react'
import { Link } from 'react-router-dom'

const Title = (props) => {
  const { userAmt, page, handleSearch } = props
  return (
    <div className="container">
      {
        page === "show" &&
        <div className="title">
          <h2 className='fw-900 d-flex'>
            <strong>Employees </strong>
            <span className='num'>{userAmt}</span>
          </h2>
          <div className="center-block">
            <input
              className="search"
              onChange={handleSearch}
              placeholder="Search by first name, last name or title..."
            />
          </div>
          <div>
            <Link to='/create-user' className="btn btn-purple-va">+ Add a New Employee</Link>
          </div>
        </div>}
      {page === "create" &&
        <div className="title">
          <h2 className='fw-900 d-flex'>
            <strong>Create a New Employee</strong>
          </h2>
          <div>
            <Link to='/' className="btn btn-purple-va"> Show Employee List</Link>
          </div>
        </div>
      }
      {page === "edit" &&
        <div className="title">
          <h2 className='fw-900 d-flex'>
            <strong>Update Employee Information</strong>
          </h2>
          <div>
            <Link to='/' className="btn btn-purple-va"> Show Employee List</Link>
          </div>
        </div>
      }
      {page === "details" &&
        <div className="title">
          <h2 className='fw-900 d-flex'>
            <strong>User Information</strong>
          </h2>
          <div>
            <Link to='/' className="btn btn-purple-va"> Show Employee List</Link>
          </div>
        </div>
      }
    </div>
  )
}

export default Title