import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from './UserCard';
import Title from './Title';
import Loader from './Loader';
import Pagination from './Pagination';

const ShowUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]); // New state for filtered users
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);
  const page = 'show';

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://userprofilebackend.cyclic.app/api/')
      .then((res) => {
        setUsers(res.data);
        setFilteredUsers(res.data); // Initialize filteredUsers with all users
      })
      .catch((err) => {
        console.log('Error occurred while fetching user data:', err);
      });
  }, []);

  useEffect(() => {
    // When the search input changes, filter users based on the search term
    const searchTerm = search.toLowerCase();
    const filtered = users.filter(
      (user) =>
        user.fname.toLowerCase().includes(searchTerm) ||
        user.lname.toLowerCase().includes(searchTerm) ||
        user.title.toLowerCase().includes(searchTerm)
    );
    setFilteredUsers(filtered);
    setCurrentPage(1); // Reset to the first page when search changes
  }, [search, users]);

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const userList =
    filteredUsers.length === 0 ? (
      <Loader />
    ) : (
      currentUsers.map((user) => <UserCard user={user} key={user.id} />)
    );

  const userAmt = filteredUsers.length;

  return (
    <div className="ShowUsers">
      <div className="container">
        <div className="row">
          <Title page={page} userAmt={userAmt} handleSearch={handleSearch} />
        </div>
        <div className="list">{userList}</div>
        <Pagination usersPerPage={usersPerPage} totalUsers={userAmt} paginate={paginate} />
      </div>
    </div>
  );
};

export default ShowUsers;
