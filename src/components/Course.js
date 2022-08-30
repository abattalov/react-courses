import React from 'react'

function Course(props) {
  return (
    <div className='course-card'>
        <h3>{props.name}</h3>
        <h3>{props.location}</h3>
        <h3>{props.holes}</h3>
        <p>{props.notes}</p>
    </div>
  )
}

export default Course