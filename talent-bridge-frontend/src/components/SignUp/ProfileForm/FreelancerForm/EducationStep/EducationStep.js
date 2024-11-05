import React, { useEffect, useState } from 'react'
import { Box, Button, IconButton, Typography } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const EducationStep = ({freelancerId}) => {
    const [educations, setEducations] = useState([]);
    const navigate = useNavigate();

    const handleEducationButton = () => {
        navigate("/educationForm", { state: { freelancerId } });
    }

    useEffect(() => {
        const fetchEducations = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/freelancers/${freelancerId}/educations`);
                setEducations(response.data);
            } catch (error) {
                console.error("Error fetching educations:", error.response ? error.response.data : error.message);
            }
        };

        fetchEducations();
    }, [freelancerId]);

  return (
    <Box>
        <Typography>
            Clients like to know what you know - add your education here
        </Typography>
        <Typography>
            Add any relevant education that helps make your profile more visible.
        </Typography>

        <IconButton onClick={handleEducationButton}>
            <AddCircleIcon />
        </IconButton>

        <Typography>Add education</Typography>
        {educations.map((educ) => (
                <Box key={educ.id} sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
                    <Typography variant="h6">{educ.school}</Typography>
                    <Typography variant="body2">{educ.fieldOfStudy}</Typography>
                    <Typography variant="body2">{educ.startDate} - {educ.endDate}</Typography>
                    <Typography variant="body1">{educ.description}</Typography>
                    <Typography variant="body2">{educ.degree}</Typography>
                </Box>
            ))}

        <Button type='submit' variant='contained' color='primary'>
            Save
        </Button>
        
    </Box>
  )
}

export default EducationStep
