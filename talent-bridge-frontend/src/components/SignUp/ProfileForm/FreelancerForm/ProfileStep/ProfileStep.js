import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

const ProfileStep = ({profile, handleChange}) => {
  return (
    <Box>

        <Typography>
        Hey. Ready for your next big opportunity?
        A professional photo helps you build trust with your clients. And a title to tell the world what you do
        </Typography>

        <TextField 
            label="Country"
            name='country'
            value={profile.country}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="City"
            name='city'
            value={profile.city}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Street"
            name='street'
            value={profile.street}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Post code"
            name='postCode'
            value={profile.postCode}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Date of birth"
            name='dateOfBirth'
            value={profile.dateOfBirth}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Gender"
            name='gender'
            value={profile.gender}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Job Title"
            name='jobTitle'
            value={profile.jobTitle}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Phone number"
            name='phoneNumber'
            value={profile.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Bio"
            name='bio'
            value={profile.bio}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />
        <TextField 
            label="Hourly rate"
            name='hourlyRate'
            value={profile.hourlyRate}
            onChange={handleChange}
            fullWidth
            margin='normal'
        />

        <Button type='submit' variant='contained' color='primary'>
            save
        </Button>

    </Box>
  )
}

export default ProfileStep