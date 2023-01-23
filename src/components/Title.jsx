import React from 'react'
import { Link } from 'react-router-dom'

const Title = (props) => {
  const { userAmt } = props
  return (
    <div className="title">
      <h2 className="fw-900 d-flex">
        <strong>People </strong>
        <span className="num">{userAmt}</span>
      </h2>
      <div className="">
        <Link to='/create-user' className="btn btn-purple-va">+ Add a New Employee</Link>
      </div>
    </div>
  )
}

export default Title