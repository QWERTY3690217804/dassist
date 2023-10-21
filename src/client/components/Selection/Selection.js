import Major from '../Major/Major.js';
import './Selection.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Selection ({  }) {
    const [selectedMajor, setSelectedMajor] = useState("");
    const navigate = useNavigate();
    const handleSelectMajor = (major) => {
        setSelectedMajor(major);
      };

    const handleNavigate = () => {
        if (selectedMajor) {
            navigate(`/school?major=${selectedMajor}`);
        } else {
            alert("Please pick a major");
        }
    };

  return (
    <div className="Selection">
      <p className="selection-title">What's your major?</p>
      <div className="selection-grid">
        <Major onSelectMajor={handleSelectMajor}/>
      </div>
      <button className="selection-button" onClick={handleNavigate}>
        Go to Major Page
      </button>   
    </div>
  );
}

export default Selection;
