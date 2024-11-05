import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';

const DynamicForm = ({ formData, setFormData, formFields, formTitle, apiUrl }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(`Submitting ${formTitle.toLowerCase()} form data:`, formData);
        try {
            const response = await axios.post(apiUrl, formData);
            console.log(`${formTitle} form submitted successfully:`, response.data);
        } catch (error) {
            console.error(`Error submitting ${formTitle.toLowerCase()} form:`, error.response ? error.response.data : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Typography variant='h5'>{formTitle}</Typography>
            {formFields.map((field, index) => (
                <TextField
                    key={index}
                    label={field.label}
                    type={field.type}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    multiline={field.multiline || false}
                    rows={field.rows || 1}
                    InputLabelProps={field.type === 'date' ? { shrink: true } : {}}
                />
            ))}
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
        </form>
    );
};

export default DynamicForm;
