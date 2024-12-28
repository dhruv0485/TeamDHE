import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { withErrorBoundary } from './utils/errorBoundary';
import Navbar from './components/layout/Navbar';
import EmergencySOS from './pages/EmergencySOS';
import ARWorkout from './pages/ARWorkout';
import VRMeditation from './pages/VRMeditation';
import BlockchainHealth from './pages/BlockchainHealth';
import SmartMedReminder from './pages/SmartMedReminder';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/features" element={<Features />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/emergency-sos" element={<EmergencySOS />} />
          <Route path="/ar-workout" element={<ARWorkout />} />
          <Route path="/vr-meditation" element={<VRMeditation />} />
          <Route path="/blockchain-health" element={<BlockchainHealth />} />
          <Route path="/smart-med-reminder" element={<SmartMedReminder />} />
        </Routes>
        <ToastContainer position="top-right" />
      </div>
    </Router>
  );
}

export default withErrorBoundary(App);