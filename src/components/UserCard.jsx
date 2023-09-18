import React from 'react';
import { Link } from 'react-router-dom'
import { FaRegEdit } from 'react-icons/fa'

const UserCard = (props) => {
  const { user } = props;

  return (
    <>
      <div className='user-card'> 
        <Link to={`/show-user/${user._id}`}>
          <FaRegEdit className="edit-user" />
        </Link>   
        
        <div className='card-container'>
          <img src={user.img} alt='user' />
        </div>
        <div className="card-content">

        <div className='desc'>
          <h2>
            <Link to={`/show-user/${user._id}`}>
              {user.fname} {user.lname}
            </Link>
          </h2>
          <div className="h3">{user.title}</div>
        </div>
        <div className="contact">
          <div className="number">{user.number}</div>
          <div className="email">{user.email}</div>
        </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
