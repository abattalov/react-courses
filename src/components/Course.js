import React from 'react'

function Course(props) {
  return (
    <div className='course-card'>
        <h3>{props.name}</h3>
        <div className='card-text'>
            <h4>Location: {props.location}</h4>
            <h4>Number of Holes: {props.holes}</h4>
            <h4>Notes:</h4>
            <p>{props.notes}</p>
        </div>
    </div>
  )
}


export default Course;