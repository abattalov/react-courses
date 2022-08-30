import React from 'react'

function Course(props) {
  return (
    <div className='course-card'>
        <h3>{props.name}</h3>
        <h4>{props.location}</h4>
        <h4>{props.holes}</h4>
        <p>{props.notes}</p>
    </div>
  )
}

export default Course