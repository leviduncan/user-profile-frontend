import React from 'react'

const Pagination = (props) => {
  const {usersPerPage, totalUsers, paginate} = props
  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="d-flex justify-content-center mt-3">
            <div className="nav">
                <ul className="pagination">
                    {pageNumbers.map(number => (
                        <li key={number} className="page-item">
                            <a onClick={() => paginate(number)} href="#" className="page-link">{number}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
  )
}

export default Pagination