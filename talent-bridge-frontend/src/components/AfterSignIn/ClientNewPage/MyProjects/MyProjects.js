import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserNavbar from '../../UserNavbar/UserNavbar';
import axios from 'axios';

const MyProjects = () => {
    const [fixedProjects, setFixedProjects] = useState([]);
    const [hourlyProjects, setHourlyProjects] = useState([]);

    useEffect(() => {
        const fetchFixedProjects = async () => {
            try {
                const response = await axios.get("http://localhost:8080/api/fixedProjects");

                const fixedProjectWithType = response.data.map(project => ({
                    ...project,
                    type: 'fixedProject'
                }));
                setFixedProjects(fixedProjectWithType);
                console.log(response.data);
            } catch(error) {
                console.error("Error fetching fixed projects:", error);
            }
        };

        const fetchHourlyProjects = async() => {
            try {
                const response = await axios.get("http://localhost:8080/api/hourlyProjects");

                const hourlyProjectWithType = response.data.map(project => ({
                    ...project,
                    type: 'hourlyProject'
                }));
                setHourlyProjects(hourlyProjectWithType);
                console.log(response.data);
            } catch (error) {
                console.error("Error fetching hourly projects:", error);
            }
        }

        fetchFixedProjects();
        fetchHourlyProjects();

    }, [])

  return (
    <>
    <UserNavbar />
        <Container maxWidth='lg'>
            <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>Fixed Projects</Typography>
            {fixedProjects.map((project) => (
                <Box key={project.id} sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
                <Typography variant="h6">Name: {project.name}</Typography>
                <Typography variant="body2">Type: {project.type}</Typography>
                <Typography variant="body2">Due Date: {project.dueDate}</Typography>
                <Typography variant="body1">Description: {project.description}</Typography>
                <Typography variant="body2">Required Skills: {project.requiredSkills}</Typography>
                </Box>
            ))}
            </Box>

            <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>Hourly Projects</Typography>
            {hourlyProjects.map((project) => (
                <Box key={project.id} sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
                <Typography variant="h6">Name: {project.name}</Typography>
                <Typography variant="body2">Type: {project.type}</Typography>
                <Typography variant="body2">Start Date: {project.startDate}</Typography>
                <Typography variant="body1">Budget: {project.budget}</Typography>
                <Typography variant="body2">Duration: {project.duration} hours</Typography>
                <Typography variant="body2">Resource Number: {project.resourceNumber}</Typography>
                <Typography variant="body1">Description: {project.description}</Typography>
                <Typography variant="body2">Required Skills: {project.requiredSkills}</Typography>
                </Box>
            ))}
            </Box>
        </Container>
    </>
  )
}

export default MyProjects