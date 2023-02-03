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
          <div className="email"><Link to={user.email}>{user.email}</Link></div>
        </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
