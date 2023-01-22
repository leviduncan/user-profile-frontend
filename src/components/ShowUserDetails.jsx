import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const ShowUserDetails = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const[user, setUser] = useState([])

    useEffect(() => {
        axios
            .get(`https://userprofilebackend.cyclic.app/api/${id}`)
            .then((res) => {
                setUser(res.data)
            })
            .catch((err) => {
                console.log('There was an error while trying to show details about a user')
            })
    }, [id])

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:8800/api/${id}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                console.log('There was an error while trying to delete a user record')
            })
    }

    const UserItem = (
        <div>
            <div>{user.title}</div>
            <div>{user.fname}</div>
            <div>{user.lname}</div>
            <div>{user.email}</div>
            <div>{user.number}</div>
            <div>{user.gender}</div>
            <div>{user.img}</div>
        </div>
    )

  return (
    <>
        <div className="ShowUserDetails">
            <div className="container">
                <div className="row">
                    <div className="col-md-10 m-auto">
                        <Link to="/" className='btn btn-outline-warning float-left'>Show User List</Link>
                    </div>
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">User's Record</h1>
                        <p className="lead text-center">View User's Info</p>
                        <hr />
                    </div>
                    <div className="col-md-10 m-auto">{UserItem}</div>
                    <div className="col-md-6 m-auto">
                        <button className="btn btn-outline-danger btn-lg btn-block" onClick={() => {
                            handleDelete(user._id)
                        }}>Delete User</button>
                    </div>
                    <div className="col-mb-6 m-auto">
                        <Link to={`/edit-user/${user._id}`}>Edit User</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ShowUserDetails