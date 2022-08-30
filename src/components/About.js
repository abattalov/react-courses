import React from 'react'
import picture from './profile_pic.jpg'

function About() {
  return (
    <div className='card'>
        <img className='profile-pic' src={picture} alt=''/>
        <h1>Alisher Battalov</h1>
        <p className="title">Software Engineering Student</p>
        <p>Former Microbiologist who loves learning to code.</p>
        <p>Flatiron School</p>
        <a href="https://www.linkedin.com/in/alisher-battalov-820894b1/"><button>Contact me!</button></a>
    </div>
  )
}

export default About