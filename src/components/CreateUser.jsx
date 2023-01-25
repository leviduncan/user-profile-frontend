import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import EmployeeType from './EmployeeType';

const CreateUser = () => {
  const navigate = useNavigate();
  const page = "create"
  const [user, setUser] = useState({
    title: '',
    fname: '',
    lname: '',
    email: '',
    number: '',
    gender: '',
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
            <Title page={page} />
          </div>
          <div className="row">
            <div className="col-md-8 m-auto">
               
                <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                      <EmployeeType handleChange={handleChange}/>
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
                      <div class="form-check">
                        <label htmlFor="Male" class="form-check-label">
                          <input type='radio' name='gender' className='form-check-input' id="Male" value="Male" onChange={handleChange} />Male
                        </label>
                      </div>
                      <div class="form-check">
                        <label htmlFor="Female" class="form-check-label">
                          <input type="radio" name='gender' className='form-check-input' id="Female" value="Female" onChange={handleChange} />Female
                        </label>
                      </div>

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
