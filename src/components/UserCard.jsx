import React from 'react';
import { Link } from 'react-router-dom';

const UserCard = (props) => {
  const user = props.user;

  return (
    <>
      <div className='user-card'>
        <div className='card-container'>
          <img src={user.img} alt='user' />
        </div>
        <div className='desc'>
          <h2>
            <Link to={`/show-user/${user._id}`}>
              {user.fname} {user.lname}
            </Link>
          </h2>
          <h3>{user.title}</h3>
        </div>
      </div>
    </>
  );
};

export default UserCard;
