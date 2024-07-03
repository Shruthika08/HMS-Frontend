// api.js
const API_BASE_URL = 'http://localhost:8080'; 

export const addPatient = async (patientDetails) => {
  const response = await fetch(`${API_BASE_URL}/appointments/patients`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(patientDetails),
  });
  const data = await response.json();
  return data;
};

export const getAllDoctors = async () => {
  try {
    const response = await fetch('http://localhost:8080/appointments/doctors');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data; // Assuming data is an array of doctor objects
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error; // Rethrow the error for the component to handle
  }
};


export const getPatientAppointments = async (patientId) => {
  const response = await fetch(`${API_BASE_URL}/appointments/patients/${patientId}/appointments`);
  const data = await response.json();
  return data;
};

export const getDoctorAppointments = async (doctorId) => {
  const response = await fetch(`${API_BASE_URL}/appointments/doctors/${doctorId}/appointments`);
  const data = await response.json();
  console.log("1111" , data);

  return data;
};

export const getPatientDetails = async (patientId) => {
  const response = await fetch(`${API_BASE_URL}/appointments/patients/${patientId}`);
  const data = await response.json();
  console.log("1111" , data);

  return data;
};

export const addPrescription = async (patientId, prescriptionDetails) => {
  const response = await fetch(`${API_BASE_URL}/appointments/patients/${patientId}/prescriptions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(prescriptionDetails),
  });
  const data = await response.json();
  console.log("1111" , data);

  return data;
};
