import React, { useState } from 'react';

const PatientPage = () => {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [insuranceId, setInsuranceId] = useState('');
  const [dateTime,setDateTime]=useState('');
  const [patientId,setPatientId]=useState('');
  const [doctorId,setdoctorId]=useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/appointments/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          contact,
          insuranceId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('Patient added successfully');
      // Clear form fields after successful submission
      setName('');
      setContact('');
      setInsuranceId('');
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  const appointmentSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const response = await fetch(`http://localhost:8080/appointments/doctors/${doctorId}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          appointmentDateTime:dateTime,
          patientId,
          doctorId,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      console.log('appointment made successfully');
      // Clear form fields after successful submission
      setDateTime('');
      setdoctorId('');
      setPatientId('');
    } catch (error) {
      console.error('Error adding patient:', error);
    }
  };

  return (
    <>
    <div>
      <h2>Add Patient</h2>
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
          Contact:
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Insurance ID:
          <input
            type="text"
            value={insuranceId}
            onChange={(e) => setInsuranceId(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Patient</button>
      </form>
    </div>
    
    <h2>Make an appointment</h2>
    <form onSubmit={appointmentSubmit}>
    <label htmlFor="dateTime">(date and time):</label>
    <input type="datetime-local" id="dateTime" name="dateTime" onChange={(e)=>{setDateTime(e.target.value)}} value={dateTime} />
        <br />
        <label>
          DoctorId:
          <input
            type="number"
            value={doctorId}
            onChange={(e) => setdoctorId(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          patientID:
          <input
            type="text"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Add Patient</button>
      </form>
    </>
  );
};

export default PatientPage;
