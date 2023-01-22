import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const UpdateUserInfo = () => {
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
      .get(`http://localhost:8800/api/${id}`)
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
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
              Show User List
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Edit User</h1>
            <img src={user.img} alt="" className="m-auto" />
            <p className='lead text-center'>Update User's Info</p>
          </div>
        </div>

        <div className='col-md-8 m-auto'>
          <form noValidate onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              {/* <input
                type='text'
                placeholder='User Title'
                name='title'
                className='form-control'
                value={user.title}
                onChange={handleChange}
              /> */}

              <select className='form-control' name='title' onChange={handleChange}>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
              </select>
            </div>
            <br />

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
            <br />

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
            <br />

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
            <br />

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
            <br />

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
            <br />

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
            <br />

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
  );
}


export default UpdateUserInfo