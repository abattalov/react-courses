import React from 'react'

function Form() {

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log()
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='course-form'>
            <label htmlFor='name'>Course Name</label>
            <input 
            name='name'
            placeholder='Course Name...'
            />
            <label htmlFor='location'>Location</label>
            <input 
            name='location'
            placeholder='Location...'
            />
            <label htmlFor='holes'>Number of holes</label>
            <input 
            name='holes'
            placeholder='Holes...'
            />
            <label htmlFor='notes'>Notes</label>
            <input 
            name='notes'
            placeholder='Notes...'
            />
            <button>Save Course</button>
        </form>
    </div>
  )
}

export default Form