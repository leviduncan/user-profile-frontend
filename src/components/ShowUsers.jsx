import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import UserCard from './UserCard'

const ShowUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:8800/api/')
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log("Woops! something went wrong while trying to display a list of users!")
            })
    }, [])

    const userList = 
    users.length === 0
    ? 'there are no users in this list!'
    : users.map((user, k) => <UserCard user={user} key={k} />)


  return (
    <div className="ShowUsers">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <br />
                    <h2 className="display-4 text-center">
                        Users List
                    </h2>
                    <div className="col-md-11">
                        <Link to='/create-user' className="btn btn-outline-warning float-right">+ Add New User</Link>
                    </div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
            <div className="list">{userList}</div>
        </div>
    </div>
  )
}

export default ShowUsers