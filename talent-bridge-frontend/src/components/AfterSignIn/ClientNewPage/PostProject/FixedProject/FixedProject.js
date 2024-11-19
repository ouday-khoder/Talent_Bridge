import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';

    const skillsOption = ['JavaScript', 'Python', 'Java', 'React', 'Node.js', 'CSS', 'HTML'];

    const FixedProject = ({ formData, handleChange, handleSubmit }) => {
    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: '600px', margin: '0 auto' }}>
        <Typography variant="h5">Fixed Project</Typography>
            <TextField
            fullWidth
            label="Name"
            name="name"
            type="text"
            value={formData.name || ''}  
            onChange={handleChange}
            sx={{ mb: 2 }}
            />
            <TextField
            fullWidth
            label="Due Date"
            name="dueDate"
            type="date"
            InputLabelProps={{ shrink: true }}
            value={formData.dueDate || ''} 
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
            <Button type="submit" variant="contained">Submit Fixed Project</Button>
        </Box>
    );
};

export default FixedProject;
