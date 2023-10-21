import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './University.css';

function University() {
    const location = useLocation();
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
    const queryParams = new URLSearchParams(location.search);
    const selectedMajor = queryParams.get('major');

    const handleNavigate = () => {
        if (selectedUniversity) {
            navigate(`/schedule?major=${selectedMajor}&university=${selectedUniversity}`);
        } else {
            alert('Please select a school before proceeding.');
        }
    };

    const customStyle = {
        backgroundColor: 'white',
        border: 'none',
        borderRadius: '10px',
        padding: '1%',
        marginTop: '1%',
        marginLeft: '6%',
        fontSize:'140%',
        fontColor:'rgb(155,155,155)'
      };

  return (
    <div className="University">
        <p className="university-title">Pick a school for transfer:</p>
        <ul className="university-list">
        {universities.map((university, index) => (
          <li key={index}>
            <button
              style={customStyle}
              className={selectedUniversity === university ? "selected" : ""}
              onClick={() => handleUniversitySelection(university)}
            >
              {university}
            </button>
          </li>
        ))}
      </ul>
      <button className="university-button" onClick={handleNavigate}>
        Go to Schedule
      </button>     
    </div>
    
  );
}

export default University;
