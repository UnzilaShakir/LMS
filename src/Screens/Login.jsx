import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../FirebaseConfig';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userLoged = await  signInWithEmailAndPassword(auth,email,password);
      console.log(userLoged,"User logged in:");
      const userData = userLoged.user;
      console.log(userData);
      navigate('/dashboard')
      
      
    } catch (error) {
      console.log(error);
    }
    
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLogin}>
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
        <Button fullWidth variant="contained" type="submit">Login</Button>
      </form>
      <Typography variant="body2" sx={{ mt: 2 }}>
        Don't have an account? <Link to="/signup">Sign Up here</Link>
      </Typography>
    </Box>
  );
};

export default Login;
