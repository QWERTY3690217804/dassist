import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function University() {
    const navigate = useNavigate();
    const [selectedUniversity, setSelectedUniversity] = useState("");
    const universities = [  'UC Berkeley', 'UC Los Angeles',
                            'UC San Diego', 'UC Santa Barbara',
                            'UC Merced', 'UC Irvine',
                            'UC Riverside', 'UC Davis',
                            'UC Santa Cruz'
                        ];
    const handleUniversitySelection = (university) => {
        setSelectedUniversity(university);
    };

    const handleNavigate = () => {
        if (selectedUniversity) {
            // Redirect to a different page when a major is selected
            navigate('/schedule');
        } else {
            alert('Please select a school before proceeding.');
        }
        };

  return (
    <div className="App">
        <p>Pick a school for transfer:</p>
        <ul>
        {universities.map((university, index) => (
          <li key={index}>
            <button
              className={selectedUniversity === university ? "selected" : ""}
              onClick={() => handleUniversitySelection(university)}
            >
              {university}
            </button>
          </li>
        ))}
      </ul>
      <p>{selectedUniversity}</p>
      <button onClick={handleNavigate}>
        Go to Schedule
      </button>     
    </div>
    
  );
}

export default University;
