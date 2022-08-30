import React from 'react'
import Form from './Form'
import {connect} from 'react-redux';
import Course from './Course';


function CourseList(props) {

  const courses = props.courses.map((course) => <Course key={course.id} id={course.id} name={course.name} location={course.location} holes={course.holes} notes={course.notes}/>)

  return (
    <div>
      <br/>
      <Form/>
      {courses}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    courses: state.courses
  }
}

export default connect(mapStateToProps)(CourseList)