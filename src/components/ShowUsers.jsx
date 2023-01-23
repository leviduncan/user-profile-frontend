import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import Title from './Title'

const ShowUsers = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios
            .get('https://userprofilebackend.cyclic.app/api/')
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

    const userAmt = users.length

  return (
    <div className="ShowUsers">
        <div className="container">
            <div className="row">
                <Title userAmt={userAmt}/>
            </div>
            <div className="list">{userList}</div>
        </div>
    </div>
  )
}

export default ShowUsers