import React from 'react';
import VehicleBooking from './pages/VehicleBooking';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      <div className="sticky w-full top-0 " style={{ zIndex: "999" }}>
        <Navbar />
      </div>
       <Routes>
        <Route path="/booking" element={<VehicleBooking />} />
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;

