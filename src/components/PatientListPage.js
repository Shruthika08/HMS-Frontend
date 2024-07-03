import React, { useEffect, useState } from 'react';

const PatientListPage = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await fetch('http://localhost:8080/appointments/patients');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPatients(data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>List of Patients</h2>
      <ul>
        {patients.map((patient) => (
          <li key={patient.id}>
            {patient.name} - {patient.contact} - {patient.insuranceId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientListPage;
