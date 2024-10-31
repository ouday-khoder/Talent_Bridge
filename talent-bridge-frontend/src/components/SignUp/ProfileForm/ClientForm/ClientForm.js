import React from 'react';
import { Button, TextField } from '@mui/material';

const ClientForm = ({ profile, handleChange }) => {
    return (
        <>
            <TextField
                label="Country"
                name="country"
                value={profile.country}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="City"
                name="city"
                value={profile.city}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Street"
                name="street"
                value={profile.street}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Post Code"
                name="postCode"
                value={profile.postCode}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Date of Birth"
                name="dateOfBirth"
                value={profile.dateOfBirth}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Gender"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Job Title"
                name="jobTitle"
                value={profile.jobTitle}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Phone Number"
                name="phoneNumber"
                value={profile.phoneNumber}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
            <TextField
                label="Bio"
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />

            <Button type="submit" variant="contained" color="primary">
                Sign Up
            </Button>
        </>
    );
};

export default ClientForm;
