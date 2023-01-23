import React from 'react'

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="header-content">
        <div className="header-user">
          <div>
            <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Tammy Kanarsie" />
          </div>
          <div>
            <h3>Tammy Kanarsie</h3>
            <p>HR-Manager</p>
          </div>
        </div>
        <div className="right-side">
          <div className="btn btn-purple btn-md">Log out</div>
        </div>

      </div>
    </div>
  )
}

export default Header