import React, {useState} from 'react'
import { connect } from 'react-redux';
import {addCourse} from '../actions'

function Form(props) {

    const [courseState, setCourseState] = useState({
        name: '',
        location: '',
        holes: '',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        props.addCourse(courseState)
    }

    const handleChange = (e) => {
        e.preventDefault();

        const fieldName = e.target.getAttribute('name');
        const fieldValue = e.target.value;

        const newFormData = {...courseState};
        newFormData[fieldName] = fieldValue;

        setCourseState(newFormData);

    }
  return (
    <div>
        <h3>Add a New Course</h3>
        <form onSubmit={handleSubmit} className='course-form'>
            <label htmlFor='courseName'>Course Name</label>
            <input 
            name='name'
            id='courseName'
            placeholder='Course Name...'
            value={courseState.name}
            onChange={handleChange}
            />
            <label htmlFor='courseLocation'>Location</label>
            <input 
            name='location'
            placeholder='Location...'
            id='courseLocation'
            value={courseState.location}
            onChange={handleChange}
            />
            <label htmlFor='courseHoles'>Number of holes</label>
            <input 
            name='holes'
            placeholder='Holes...'
            id='courseHoles'
            value={courseState.holes}
            onChange={handleChange}
            />
            <label htmlFor='courseNotes'>Notes</label>
            <textarea 
            name='notes'
            placeholder='Notes...'
            id='courseNotes'
            value={courseState.notes}
            onChange={handleChange}
            />
            <button>Save Course</button>
        </form>
    </div>
  )
}

export default connect(null,{addCourse})(Form)