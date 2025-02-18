// StudentForm.js
import React, { useState } from 'react';
import { Button, TextField, Container, Box } from '@mui/material';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../FirebaseConfig'; // Import Firebase config

const StudentForm = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'students'), student); // Save student data to Firestore
      alert('Student added successfully!');
      setStudent({ name: '', email: '', phone: '' }); // Reset form
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Error adding student");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}> 
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={student.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          name="email"
          value={student.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Register Student
        </Button>
      </form>
    </Box>



  );
};

export default StudentForm;
