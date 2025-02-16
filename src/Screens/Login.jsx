import { Button, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
// import { signInWithEmailAndPassword } from '../Firebaseconfig/auth';
import { auth } from '../Firebaseconfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);


    const validateForm = () => {
        const newErrors = {};
        if (!email) newErrors.email = 'Email is required';
        if (!password) newErrors.password = 'Password is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      };
    
      const checkIfFormIsFilled = () => {
        if (email && password) {
          setIsButtonDisabled(false);
        } else {
          setIsButtonDisabled(true);
        }
      };
  
      useEffect(() => {
        checkIfFormIsFilled();
      }, [email, password]);
    
      const navigate = useNavigate();

      const handleLogin = () => {
        if (validateForm()) {
          navigate('/dashboard');
        }
      };

      // const handleLogin = async (e) => {
      //   e.preventDefault();
      //   if (validateForm()) {
      //     try {
      //       await signInWithEmailAndPassword(auth, email, password);
      //       navigate('/dashboard');
      //     } catch (error) {
      //       console.log(error);
            
      //     }
      //   }
      // };

     return (
            <Paper elevation={20} sx={{ width: "30vw", marginX: "auto", padding: 5 , marginTop:"80px"}}>
            <Typography variant="h3" sx={{ textAlign: "center" }} style={{fontFamily:"serif", fontStyle:"italic"}}>
             Login
           </Typography>
           <br />
           <TextField
              onChange={(e) => setEmail(e.target.value)} 
              error={!!errors.email}
              helperText={errors.email}
              label="Enter Email" 
              required
             fullWidth
           />
           <br /><br />
           <TextField
              onChange={(e) => setPassword(e.target.value)} 
              error={!!errors.password}
              helperText={errors.password}
              label="Enter Password"
              type='password'
              required
             fullWidth
           />
           <br /><br />
           <Button
           onClick={handleLogin}
           color="success"
             fullWidth
             variant="contained"
             disabled={isButtonDisabled}
             sx={{ marginBottom: 3 }}>Login
           </Button>
        </Paper>

    )
}

export default Login;