import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PatientPage from './components/PatientPage';
import DoctorPage from './components/DoctorPage';
import PatientListPage from './components/PatientListPage'; // Ensure the correct path

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/admin" element={<DoctorPage />} />
        <Route path="/admin/patients" element={<PatientListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
