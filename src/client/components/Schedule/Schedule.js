import React, { useEffect, useState } from 'react';

const predefinedCollegeId = 2; // Set your desired college_id here

function CollegeInfo() {
  const [collegeName, setCollegeName] = useState('');

  useEffect(() => {
    fetch(`http://localhost:8000/api/college/2`)
  .then((response) => {
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      return;
    }
    return response.text(); // Change from response.json() to response.text()
  })
  .then((data) => {
    console.log('Data received:', data);
    // setCollegeName(data.college_name); // Comment this out temporarily
  })
  .catch((error) => {
    console.error('Error fetching data:', error);
  });
  }, []);

  return (
    <div>
      <h2>College Name:</h2>
      <p>{collegeName}</p>
      <p>hi</p>
    </div>
  );
}

export default CollegeInfo;