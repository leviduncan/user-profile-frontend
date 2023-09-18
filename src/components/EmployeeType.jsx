import React from 'react'

const EmployeeType = (props) => {
  const { handleChange, title } = props
  return (
    <>
      <select className='form-control' name='title' onChange={handleChange}>
        <option value={title}>{title}</option>
        <option value="Marketing-Coordinator">Marketing-Coordinator</option>
        <option value="HR-Manager">HR-Manager</option>
        <option value="HR-Associate">HR-Associate</option>
        <option value="Graphic-Designer">Graphic-Designer</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="Team Lead">Team Lead</option>
        <option value="Web-Designer">Web-Designer</option>
        <option value="Web-Developer">Web-Developer</option>
        <option value="Copywriter">Copywriter</option>
        <option value="CEO">CEO</option>
        <option value="CFO">CFO</option>
        <option value="CTO">CTO</option>
        <option value="COO">COO</option>
      </select>
    </>
  )
}

export default EmployeeType