import { useState } from 'react';
import React from 'react'
import  './enroll.css'
const enroll =()=>{

function StudentForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [place, setPlace] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (place === '' || isNaN(parseInt(age)) || age < 0) {
      setErrorMessage('Please enter valid details.');
    } else {
      // Submit form data to server or store it in state
      console.log('Form submitted!');
    }
  };

  return (
    <div className="container">
      <h1>Student Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input type="text" id="place" value={place} onChange={(e) => setPlace(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
        {errorMessage && <div className="error">{errorMessage}</div>}
      </form>
    </div>
  );
}
}

export default enroll