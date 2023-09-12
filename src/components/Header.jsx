import React from 'react'
import { GrResources } from 'react-icons/gr';
import { BiSolidBellRing } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

const Header = () => {
  const iconStyle = { color: "white" }
  return (
    <div className="container-fluid header">
      <div className="header-content">
        {/* <div className="header-user">
          <div>
            <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Tammy Kanarsie" />
          </div>
          <div>
            <h3>Tammy Kanarsie</h3>
            <p>HR-Manager</p>
          </div>
        </div> */}
        <div>
          <a href="/"><h3><GrResources style={{ fill: 'white' }} /> HR Onboarding</h3></a>
        </div>
        <div className="right-side">
        <div className="btn btn-purple btn-md mx-2"><BiSolidBellRing /> Notifications</div> 
        <div className="btn btn-purple btn-md"><FiSettings /> Settings</div> 
          {/* <div className="btn btn-purple btn-md">Log out</div> */}
        </div>

      </div>
    </div>
  )
}

export default Header