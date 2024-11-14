import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <Box
    component="form"
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
        
    <Button variant="contained" color="primary" fullWidth>
        Login
    </Button>
    </Box>
  )
}

export default SignIn