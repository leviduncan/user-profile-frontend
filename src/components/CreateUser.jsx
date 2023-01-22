import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    title: '',
    fname: '',
    lname: '',
    email: '',
    number: '',
    img: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://userprofilebackend.cyclic.app/api/add', user)
      .then((res) => {
        setUser({
          title: '',
          fname: '',
          lname: '',
          email: '',
          number: '',
          img: '',
        });

        navigate('/');
      })
      .catch((err) => {
        console.log('Something went wrong. Can not create user!');
      });
  };

  return (
    <>
      <div className='CreateUser'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-8 m-auto'>
              <br />
              <Link to='/' className='btn btn-outline-warning float-left'>
                Show User List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Add User</h1>
                <p className="lead text-center">Create new user</p>
                <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* <input type='text' placeholder='User Title' name='title' className='form-control' value={user.title} onChange={handleChange} /> */}

                        <select className='form-control' name='title' onChange={handleChange}>
                          <option value="Manager">Manager</option>
                          <option value="Employee">Employee</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='First Name' name='fname' className='form-control' value={user.fname} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='Last Name' name='lname' className='form-control' value={user.lname} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='Email' name='email' className='form-control' value={user.email} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='Phone' name='number' className='form-control' value={user.number} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='Gender' name='gender' className='form-control' value={user.gender} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <input type='text' placeholder='Avatar' name='img' className='form-control' value={user.img} onChange={handleChange} />
                    </div>
                    <input type="submit" className="btn btn-outline-warning btn-block mt-4" />
                </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
