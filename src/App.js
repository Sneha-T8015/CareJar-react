import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Doctor from './components/Doctor';
import NavBar from './components/Navbar';

function App() {
  const [activeComponent, setActiveComponent] = useState('header'); // Initial active component

  const handleNavbarClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Router>
      <div className="App">
        <div className='p-4 w-full flex justify-center'>
          <NavBar onNavbarClick={handleNavbarClick} />
        </div>
        <div className='py-12'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doctor" element={<Doctor />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
