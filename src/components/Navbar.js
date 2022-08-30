import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
        <h1 className='nav-title'>My Course Review</h1>
        <Link to='/'><button className='nav-button'>Home</button></Link>
        <Link to='/courses'><button className='nav-button'>Courses</button></Link>
        <Link to='/courses/new'><button className='nav-button'>Create A Course</button></Link>
        <Link to='/about'><button className='nav-button'>About Creator</button></Link>
    </nav>
  )
}

export default Navbar