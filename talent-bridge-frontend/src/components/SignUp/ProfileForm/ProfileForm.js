import React, { useState } from 'react';
import { Box } from '@mui/material';
import ClientForm from './ClientForm/ClientForm';


const ProfileForm = () => {

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
