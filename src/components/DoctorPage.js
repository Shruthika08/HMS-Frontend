import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDoctors } from '../services/api';

const AdminDoctorPage = () => {
  const [doctors, setDoctors] = useState([]);
  const [showAddDoctorForm, setShowAddDoctorForm] = useState(false);
  const [name, setName] = useState('');
  const [specialization, setSpecialization] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/appointments/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          specialization,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Doctor added successfully');
      // Clear form fields after successful submission
      setName('');
      setSpecialization('');
      setShowAddDoctorForm(false);

      // Refresh the list of doctors
      const updatedDoctors = await getAllDoctors();
      setDoctors(updatedDoctors);
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <div>
      <h2>Manage Doctors</h2>
      <button onClick={() => setShowAddDoctorForm(!showAddDoctorForm)}>
        {showAddDoctorForm ? 'Cancel' : 'Add New Doctor'}
      </button>

      {showAddDoctorForm && (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Specialization:
            <input
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit">Add Doctor</button>
        </form>
      )}

      <h2>List of Doctors</h2>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor.id}>
            {doctor.name} - {doctor.specialization}
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/admin/patients')}>Show All Patients</button>
    </div>
  );
};

export default AdminDoctorPage;
