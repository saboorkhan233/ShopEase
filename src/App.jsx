import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './components/Signup';
import SignIn from './components/SignIn';
import rocket from './assets/rocket.png';

function App() {
  return (
    <Router>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Routes>
              <Route path="/" element={<Navigate to="/signup" />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </div>
          <div className="col-md-7">
            <img className="img-fluid w-100" src={rocket} alt="Rocket" />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
