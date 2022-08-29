export const getCourses = () =>{
    return dispatch => {
        dispatch({type: "LOADING"})
        fetch('http://localhost:3000/courses')
            .then(resp => resp.json())
            .then( courses => dispatch({type: "SET_COURSES", courses}))
    }
}

export const addCourse = (course) => {
    return dispatch => {
        fetch('http://localhost:3000/courses', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application.json"
            },
            body: JSON.stringify({course})
        })
            .then(resp => resp.json())
            .then(course => console.log(course))
    }
}