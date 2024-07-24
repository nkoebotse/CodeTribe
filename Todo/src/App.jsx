import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AdminLogin from './Components/Login';
import Register from './Components/Register';
import Employee from './Components/Employee';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<AdminLogin/>} />
          <Route path="/login" element={<AdminLogin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/employee" element={<Employee/>} />
        
        </Routes>
      </div>
    </Router>
  );
};

export default App;
