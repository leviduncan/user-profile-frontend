import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Title from './Title';
import EmployeeType from './EmployeeType';

const UpdateUserInfo = () => {
  const page = "edit"
  const [user, setUser] = useState({
    title: '',
    fname: '',
    lname: '',
    email: '',
    number: '',
    gender: '',
    img: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://userprofilebackend.cyclic.app/api/${id}`)
      .then((res) => {
        setUser({
          title: res.data.title,
          fname: res.data.fname,
          lname: res.data.lname,
          email: res.data.email,
          number: res.data.number,
          gender: res.data.gender,
          img: res.data.img
        });
      })
      .catch((err) => {
        console.log('Whoop! Sorry, unable to Update User Info');
      });
  }, [id]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: user.title,
      fname: user.fname,
      lname: user.lname,
      email: user.email,
      number: user.number,
      gender: user.gender,
      img: user.img
    };

    axios
      .put(`https://userprofilebackend.cyclic.app/api/${id}`, data)
      .then((res) => {
        navigate(`/show-user/${id}`);
      })
      .catch((err) => {
        console.log('Error while trying to update user info!');
      });
  };

  return (
    <div className='UpdateUserInfo'>
      <div className='container-fluid'>
        <div className="row">
          <Title page={page} />
        </div>
        <div className="row">
          <div className="user-card-ui">
            <div className="user-card-header">
              <img src={user.img} alt={user.fname} />
            </div>
            <div className="user-card-body">
              <form noValidate onSubmit={handleSubmit}>
                <div className="row leftRight">
                  <div className="lcol">
                    <div className='form-group'>
                      <label htmlFor='title'>Title</label>
                      <EmployeeType handleChange={handleChange} title={user.title}/>
                    </div>
                    <div className='form-group'>
                      <label htmlFor='fname'>First Name</label>
                      <input
                        type='text'
                        placeholder='First Name'
                        name='fname'
                        className='form-control'
                        value={user.fname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='lname'>Last Name</label>
                      <input
                        type='text'
                        placeholder='Last Name'
                        name='lname'
                        className='form-control'
                        value={user.lname}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='number'>Phone Number</label>
                      <input
                        type='text'
                        placeholder='Phone Number'
                        name='number'
                        className='form-control'
                        value={user.number}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="rcol">
                    <div className='form-group'>
                      <label htmlFor='img'>Avatar</label>
                      <input
                        type='text'
                        placeholder='Avatar'
                        name='img'
                        className='form-control'
                        value={user.img}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='text'
                        placeholder='Email'
                        name='email'
                        className='form-control'
                        value={user.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className='form-group'>
                      <label htmlFor='gender'>Gender</label>
                      <input
                        type='text'
                        placeholder='Gender'
                        name='gender'
                        className='form-control'
                        value={user.gender}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>        <div className="controls">

        </div>
                <button
                  type='submit'
                  className='btn btn-outline-info btn-lg btn-block'
                >
                  Update User
                </button>
              </form>
            </div>

          </div>
        </div>


        <div className='col-md-8 m-auto'>

        </div>
      </div>
    </div>
  );
}


export default UpdateUserInfo