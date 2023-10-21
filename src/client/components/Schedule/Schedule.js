import React, { useEffect, useState } from 'react';

function Schedule() {
  
    const [colleges, setColleges] = useState([]);

  useEffect(() => {
    // Make an HTTP GET request to your Express API
    fetch('http://localhost:4120/colleges') // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>College List</h1>
      <ul>
        {colleges.map((college) => (
          <li key={college.college_id}>{college.college_name}</li>
        ))}
      </ul>
      <p>Hi</p>
    </div>
  );
}

export default Schedule;