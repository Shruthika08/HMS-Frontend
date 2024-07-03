// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Hospital Management System</h1>
      <p>Please login as:</p>
      <ul>
        <li><Link to="/patient">Patient</Link></li>
        <li><Link to="/doctor">Doctor</Link></li>
        <li><Link to="/admin">Admin</Link></li>
      </ul>
    </div>
  );
};

export default Home;
