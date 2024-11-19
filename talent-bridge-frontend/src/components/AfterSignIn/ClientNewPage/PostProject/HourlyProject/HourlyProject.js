import { Box, Button, TextField, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import React from 'react';

const skillsOption = ['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'CSS', 'HTML'];

const HourlyProject = ({ formData, handleChange, handleSubmit }) => {
  return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="h5">Hourly Project</Typography>
        <TextField
            fullWidth
            label='Name'
            name='name'
            type='text' 
            value={formData.name || ''}
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
            <TextField
            fullWidth
            label='Start Date'
            name='startDate'
            type='date'
            InputLabelProps={{ shrink: true }}
            value={formData.startDate || ''}
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
            <TextField
            fullWidth
            label='Budget'
            name='budget'
            type='number'
            value={formData.budget || ''}
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
            <TextField
            fullWidth
            label='Duration (in hours)'
            name='duration'
            type='number'
            value={formData.duration || ''}
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
            <TextField
            fullWidth
            label='Resource Number'
            name='resourceNumber'
            type='number'
            value={formData.resourceNumber || ''}
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
            <TextField
            fullWidth
            label="Description"
            name="description"
            type="text"
            multiline
            rows={4}
            value={formData.description || ''}  
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
        <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel>Required Skills</InputLabel>
            <Select
            name="requiredSkills"
            value={formData.requiredSkills || ''}
            onChange={handleChange}
            >
            {skillsOption.map((skill) => (
                <MenuItem key={skill} value={skill}>
                {skill}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        <Button type="submit" variant="contained" fullWidth>
            Submit hourly Project
        </Button>
        </Box>
  );
};

export default HourlyProject;