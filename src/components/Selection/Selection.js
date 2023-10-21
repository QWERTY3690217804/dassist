import Major from '../Major/Major.js';
import MajorButton from '../MajorButton/MajorButton.js';
import './Selection.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Selection ({ onSelectMajor }) {
    const [selectedMajor, setSelectedMajor] = useState("");
    const navigate = useNavigate();
    const handleSelectMajor = (major) => {
        setSelectedMajor(major);
      };

    const handleNavigate = () => {
    if (selectedMajor) {
        // Redirect to a different page when a major is selected
        navigate('/school');
    } else {
        alert('Please select a major before proceeding.');
    }
    };

  return (
    <div className="Selection">
      <h1>What's your major?</h1>
      <div className="selection-grid">
        <Major onSelectMajor={handleSelectMajor}/>
      </div>
      <button onClick={handleNavigate}>
        Go to Major Page
      </button>     
    </div>
  );
}

export default Selection;
