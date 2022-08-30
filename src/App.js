import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import CourseList from './components/CourseList';
import About from './components/About';
import {connect} from 'react-redux';
import {getCourses} from './actions'
import Form from './components/Form';

function App(props) {

  useEffect(() =>{
    props.getCourses();
  },[props.state])

  if(props.loading){
    return (
      <h3>Loading...</h3>
    )
  }

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/courses" element={<CourseList/>}/>
        <Route exact path="/courses/new" element={<Form/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
    
  );
}

const mapStateToProps = state =>{
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, {getCourses})(App);
