import React, { useState } from 'react';
import { Box } from '@mui/material';
import ClientForm from './ClientForm/ClientForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProfileForm = () => {

    const {clientId} = useParams();

    const [profile, setProfile] = useState({
        country: '', city: '', street: '', postCode: '', 
        dateOfBirth: '', gender: '', jobTitle: '', 
        phoneNumber: '', bio: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const url = `http://localhost:8080/api/clients/profile/${clientId}`;

        axios.post(url, profile)
        .then(response => {
            console.log("Client profile saved successfully")
        })
        .catch(error => {
            console.log("Failed to save client profile");
        })
    };
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <ClientForm
                profile={profile} 
                handleChange={handleChange} 
            />
        </Box>
    );
};

export default ProfileForm;
