import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Title from './Title';
import EmployeeType from './EmployeeType';

const CreateUser = () => {
  const navigate = useNavigate();
  const [gender, setGender] = useState('men');
  const [imageUrls, setImageUrls] = useState([]); // Store the list of image URLs
  const [selectedImageUrl, setSelectedImageUrl] = useState(''); // Store the selected image URL
  const page = 'create';
  const [formValues, setFormValues] = useState({
    admin: '',
    title: '',
    fname: '',
    lname: '',
    email: '',
    number: '',
    gender: '',
    img: ''
  });

  useEffect(() => {
    // Function to generate image URLs based on gender
    const generateImageUrls = () => {
      const baseUrl = 'https://randomuser.me/api/portraits/';
      const imageList = [];

      for (let i = 1; i <= 99; i++) {
        const imgUrl = `${baseUrl}${gender}/${i}.jpg`;
        imageList.push(imgUrl);
      }

      setImageUrls(imageList);
      setSelectedImageUrl(imageList[0]); // Set the first image as the default image     
    };

    generateImageUrls(); // Initialize the image URLs
  }, [gender]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));

    if (name === 'gender') {
      setGender(value)
      setSelectedImageUrl(value)
    }

    if (name === 'img') {
      setSelectedImageUrl(e.target.value)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('https://userprofilebackend.cyclic.app/api/add', formValues)
      .then((res) => {
        setFormValues({
          admin: '',
          title: '',
          fname: '',
          lname: '',
          email: '',
          number: '',
          gender: '',
          img: ''
        });
        console.log(formValues)
        navigate('/');
      })
      .catch((err) => {
        console.log('Something went wrong. Can not create a user!');
      });
  };

  return (
    <div className="CreateUser">
      <div className="container-fluid">
        <div className="row">
          <Title page={page} />
        </div>
        <div className="row">
          <div className="user-card-ui">
            <div className="user-card-body">
              <form noValidate onSubmit={handleSubmit}>
              <div className="form-group checkbox-layout">
                  <div>Admin: </div>
                  <input
                    type="checkbox"
                    placeholder="Admin"
                    name="admin"
                    className="form-control"
                    value={formValues.admin}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <EmployeeType handleChange={handleChange} />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="First Name"
                    name="fname"
                    className="form-control"
                    value={formValues.fname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Last Name"
                    name="lname"
                    className="form-control"
                    value={formValues.lname}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone"
                    name="number"
                    className="form-control"
                    value={formValues.number}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <select
                    className="form-control"
                    name="gender"
                    onChange={handleChange}
                    value={formValues.gender}
                  >
                    <option value="men">Male</option>
                    <option value="women">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <select
                    type="text"
                    placeholder="Avatar"
                    name="img"
                    className="form-control"
                    value={formValues.img}
                    onChange={handleChange}
                  >
                    <option value="">Choose an image</option>
                    {imageUrls.map((image, index) => (
                      <option key={index} value={image}>
                        {image}
                      </option>
                    ))}
                  </select>
                </div>
                {/* {imageUrls.map((image, index) => (
                      <img key={index} src={image}/>
                    ))} */}
                <img className="imageUrl" src={selectedImageUrl} alt="Selected Avatar" />
                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
