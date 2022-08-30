import React, {useState} from 'react'
import {connect} from 'react-redux'
import {deleteCourse} from '../actions'

function Course(props) {

    const [courseState, setCourseState] = useState(props.courses);

    const handleDelete = (courseId) =>{
        const coursesCopy = [...courseState];
        const index = courseState.findIndex((course) => course.id === courseId )
        
        coursesCopy.splice(index, 1);
        
        setCourseState(coursesCopy);

        const selectedCourse = courseState[index]

        props.deleteCourse(selectedCourse)

    }
  return (
    <div className='course-card'>
        <h3>{props.name}</h3>
        <div className='card-text'>
            <h4>Location: {props.location}</h4>
            <h4>Number of Holes: {props.holes}</h4>
            <h4>Notes:</h4>
            <p>{props.notes}</p>
            <button onClick={() => handleDelete(props.id)}>Delete</button>
        </div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        courses: state.courses
    }
}

export default connect(mapStateToProps,{deleteCourse})(Course);