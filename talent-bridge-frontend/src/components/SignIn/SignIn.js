import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import UserSignIn from './UserSignIn';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();

        const response = await UserSignIn(email, password);

        if (response.success) {
            localStorage.setItem('userRole', response.role);

            if (response.role === 'client') {
                console.log("client done")
                navigate("/client/browse-freelancers")
            } else if (response.role === 'freelancer') {
                console.log("freelancer done")
            }
        } else {
            setError(response.message);
        }
    };


  return (
    <Box
    component="form"
    onSubmit={handleSignIn}
    sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#f5f5f5',
        borderRadius: 2,
    }}
    >
    <Typography variant="h5" align="center" gutterBottom>
        Sign in
    </Typography>
    
    <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
        variant="outlined"
    />
    
    <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        required
        variant="outlined"
    />

        {error && (
            <Typography color="error" align="center">
            {error}
            </Typography>
        )}
        
    <Button type='submit' variant="contained" color="primary" fullWidth>
        Login
    </Button>
    </Box>
  )
}

export default SignIn