import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
     await  createUserWithEmailAndPassword(auth,email,password)
     const user = auth.currentUser;
     console.log(user,"user created sucessfully" );
     navigate('/dashboard')
    } catch (error) {
        console.log(error);
    }

  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <form onSubmit={handleSignUp}>
        <TextField 
          fullWidth 
          label="Name" 
          variant="outlined" 
          margin="normal" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
        <TextField 
          fullWidth 
          label="Email" 
          variant="outlined" 
          margin="normal" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <TextField 
          fullWidth 
          label="Password" 
          type="password" 
          variant="outlined" 
          margin="normal" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <Button fullWidth variant="contained" type="submit">Sign Up</Button>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Already have an account? <Link to="/login">Login here</Link>
      </Typography>
    </Box>
  );
};

export default SignUp;
