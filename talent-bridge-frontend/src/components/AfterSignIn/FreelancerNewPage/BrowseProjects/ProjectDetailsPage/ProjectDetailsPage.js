
import React, { useEffect, useState } from 'react';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import UserNavbar from '../../../UserNavbar/UserNavbar';

const ProjectDetailsPage = () => {
    const [projects, setProjects] = useState(null);
    const { id, type } = useParams();

    const navigate = useNavigate();
    
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/api/allProjects/${id}/${type}`);
                console.log("API Response:", response.data);
                setProjects(response.data);
            } catch (error) {
                console.error("Error getting details projects", error);
            }
        };

        fetchProjects();
    }, [id, type]);

    if (!projects) {
        return <Typography>Loading...</Typography>; 
    }
    
    const handleButtonClick = () => {
        navigate(`/projects/${id}/${type}/bid-apply`)
    }

    return (
        <>
            <UserNavbar />
            <Container maxWidth="md" sx={{ marginTop: '20px' }}>
                <Typography sx={{ fontSize: '40px', fontWeight: 'bolder' }}>Job Details</Typography>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    {type === "fixed" ? (
                        <>
                            <Box sx={{ border: '1px solid #d5e0d5', padding: '20px', borderRadius: '10px' }}>
                                <Typography variant="h4">{projects.name}</Typography>
                                <Typography variant="body2">{projects.description}</Typography>
                                <Typography variant="h6">I need a quick WordPress based website for a school website...</Typography>
                                <Typography variant="body2">Project Type: {projects.type}</Typography>
                                <Typography variant="body2">Download the project description to check further details</Typography>
                                <Typography variant="body2">Skills and Expertise: {projects.requiredSkills}</Typography>
                                <Typography variant="body2">Activity on this job</Typography>
                                <Typography variant="body2">Proposals: 0</Typography>
                                <Typography variant="body2">Member since: {projects.dueDate}</Typography>
                            </Box>
                            <Button onClick={handleButtonClick} variant="contained" color="primary" sx={{ marginTop: '10px' }}>
                                Bid
                            </Button>
                        </>
                    ) : (
                        <>
                            <Box sx={{ border: '1px solid #d5e0d5', padding: '20px', borderRadius: '10px' }}>
                                <Typography variant="h4">{projects.name}</Typography>
                                <Typography variant="body2">{projects.description}</Typography>
                                <Typography variant="h6">We are looking for an HTML/CSS developer...</Typography>
                                <Typography variant="body2">Working hours: {projects.duration}</Typography>
                                <Typography variant="body2">Project Type: {projects.type}</Typography>
                                <Typography variant="body2">Skills and Expertise: {projects.requiredSkills}</Typography>
                                <Typography variant="body2">Activity on this job</Typography>
                                <Typography variant="body2">Proposals: 0</Typography>
                                <Typography variant="body2">Member since: {projects.startDate}</Typography>
                            </Box>
                            <Button onClick={handleButtonClick} variant="contained" color="secondary" sx={{ marginTop: '10px' }}>
                                Apply
                            </Button>
                        </>
                    )}
                </Stack>
            </Container>
        </>
    );
};

export default ProjectDetailsPage;