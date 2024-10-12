// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthFitBit from './components/authFitBit';
import FitbitRedirect from './components/redirectFitBit';
import ResultFitBit from './components/ResultFitBit';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<AuthFitBit />} />
        <Route path="/redirect" element={<FitbitRedirect />} />
        <Route path="/result" element={<ResultFitBit />} />
      </Routes>
    </Router>
  );
};

export default App;
