import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Selection from './client/components/Selection/Selection.js';
import University from './client/components/University/University.js';
import Schedule from './client/components/Schedule/Schedule.js';

function App() {

  const [selectedMajor, setSelectedMajor] = useState("");

  const handleSelectMajor = (major) => {
    setSelectedMajor(major);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {<Selection />} />
          <Route path="/school" element={<University />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
