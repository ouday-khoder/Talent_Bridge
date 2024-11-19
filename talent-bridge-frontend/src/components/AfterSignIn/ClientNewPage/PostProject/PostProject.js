import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import UserNavbar from '../../UserNavbar/UserNavbar';
import FixedProject from './FixedProject/FixedProject';
import HourlyProject from './HourlyProject/HourlyProject';

const PostProject = () => {
    const [formData, setFormData] = useState({
        name: '',
        dueDate: '',
        description: '',
        requiredSkills: '',
    });


    const [projectType, setProjectType] = useState('fixed');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
        ...formData,
        [name]: value,
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
    };


    const handleProjectTypeChange = (type) => {
        setProjectType(type); 
    };

    return (
        <>
        <UserNavbar />
        <Box>
            <Typography variant="h4">Post your Project</Typography>
        
        <Button 
            variant={projectType === 'fixed' ? 'contained' : 'outlined'}
            onClick={() => handleProjectTypeChange('fixed')}
            sx={{ mr: 2 }}
            >
            Fixed Project
            </Button>
            <Button 
            variant={projectType === 'hourly' ? 'contained' : 'outlined'}
            onClick={() => handleProjectTypeChange('hourly')}
            >
            Hourly Project
            </Button>

            {projectType === 'fixed' ? (
            <FixedProject formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            ) : (
            <HourlyProject formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            )}
        </Box>
        </>
    );
};

export default PostProject;

