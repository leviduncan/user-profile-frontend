import React, { useState, useEffect } from 'react'
import axios from 'axios'
import UserCard from './UserCard'
import Title from './Title'
import Loader from './Loader'
import Pagination from './Pagination'

const ShowUsers = () => {

    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [usersPerPage] = useState(10)
    const page = "show"
    const handleSearch = (e) => {
        setSearch(e.target.value);
      };

    useEffect(() => {
        axios
            .get('https://userprofilebackend.cyclic.app/api/')
            .then((res) => {
                setUsers(res.data)
            })
            .catch((err) => {
                console.log('Error occurred while fetching user data:', err)
            })
    }, [])

    const indexOfLastUser = currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const userList =
        users.length === 0
            ? <Loader />
            : currentUsers.filter((user) => {
                const searchTerm = search.toLowerCase()
                if (searchTerm === "") {
                    return true
                } else if (
                    user.fname.toLowerCase().includes(searchTerm) || 
                    user.lname.toLowerCase().includes(searchTerm) || 
                    user.title.toLowerCase().includes(searchTerm)
                ) {
                    return true
                }
                return false
            }).map((user) => (
            <UserCard user={user} key={user.id} />
            ))

    const userAmt = users.length


    return (
        <div className="ShowUsers">
            <div className="container-fluid">
                <div className="row">
                    <Title page={page} userAmt={userAmt} handleSearch={handleSearch}/>
                </div>
                <div className="list">
                    {userList}
                </div>
                <Pagination 
                    usersPerPage={usersPerPage}
                    totalUsers={userAmt}
                    paginate={paginate}
                />
            </div>
        </div>
    )
}

export default ShowUsers