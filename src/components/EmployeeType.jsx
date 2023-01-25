import React from 'react'

const EmployeeType = (props) => {
  const {handleChange} = props
  return (
    <>
      
      <select className='form-control' name='title' onChange={handleChange}>
                          <option value="Manager">Manager</option>
                          <option value="Marketing-Coordinator">Marketing-Coordinator</option>
                          <option value="HR-Manager">HR-Manager</option>
                          <option value="Graphic-Designer">Graphic-Designer</option>
                          <option value="Web-Designer">Web-Designer</option>
                          <option value="Web-Developer">Web-Developer</option>
                          <option value="Copywriter">Copywriter</option>
                        </select>
    </>
  )
}

export default EmployeeType