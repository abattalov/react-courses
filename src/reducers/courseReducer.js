const initialState = {
    courses: [],
    loading: true
}

const courseReducer = (state=initialState, action) => {
    switch(action.type){
        case "LOADING": 
        return {
            ...state,
            loading: true
        }
        case "SET_COURSES":
            return {
                ...state,
                loading: false,
                courses: action.courses
            }
        case "ADD_COURSE":
            return {
                ...state,
                loading: false,
                courses: [...state.courses, action.course]
            }
        case "DELETE_COURSE":

            const {id} = action.course
            const courses = state.courses.filter(course => course.id !== id) 

            return {
                ...state,
                loading: false,
                courses: courses
            }
        default:
            return state;
    }
}

export default courseReducer;