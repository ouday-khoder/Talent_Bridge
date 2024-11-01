import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FreelancerSignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8080/api/freelancers", formData)
        .then(response => {
            console.log(response.data)
            console.log("Freelancer created successfully: ", response.data)

            navigate(`/freelancer/profile/${response.data.id}`);
            console.log(response.data.id);
        })
        .catch(error => {
            console.error(error);
            console.error('There was an error creating the freelancer!', error);
        });
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" gutterBottom>
            Freelancer Signup
        </Typography>
        <TextField
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
        />
        <TextField
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
            Proceed
        </Button>
        </Box>
  );
};

export default FreelancerSignUp;
