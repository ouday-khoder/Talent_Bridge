import React, { useEffect, useState } from 'react'
import { Box, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import UserNavbar from '../../UserNavbar/UserNavbar';
import axios from 'axios';
import ProjectBox from './ProjectBox/ProjectBox';
import { useNavigate } from 'react-router-dom';

const BrowseProjects = () => {
    const [projects, setProjects] = useState([]);

    const navigate = useNavigate();

    const handleShowProjectDetails = (id, type) => {
        console.log('Navigating to project details for project ID:', id, 'Type:', type);

        navigate(`/freelancer/projects/${id}/${type}`)
    }

    useEffect(() => {
        const fetchAllProjects = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/allProjects');
            setProjects(response.data);

        } catch (error) {
            console.error("Error fetching all projects:", error);
        }
        };

        fetchAllProjects();
    }, []);


  return (
    <>
    <UserNavbar />
    <Box sx={{ 
        alignItems: 'center',
        border: '1px solid #d5e0d5',
        justifyContent: 'space-between',
        padding: '20px', 
        borderRadius: '20px',
        margin: '20px 0'
        }}>
        
        <Stack direction={"row"} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography sx={{fontWeight: 'bold', fontSize: '20px', flex: '1'}}>Jobs you might like</Typography>
            <form style={{flex: '1', display: 'flex', alignItems: 'center'}}>
            <TextField
                variant="outlined"
                placeholder="your email address"
                fullWidth
                sx={{   
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                    },
                    '& .MuiInputBase-input': {
                        padding: '10px 20px',
                    },
                }}
            />
            <IconButton>
                <SearchIcon />
            </IconButton>
            </form>
        </Stack>

        {projects.map((proj, index)=> {
        return (
            <Grid item xs={12} md={3}  key={`${proj.id}-${index}`}>
                <ProjectBox
                    type={proj.type} 
                    name={proj.name}
                    dueDate={proj.dueDate}
                    startDate={proj.startDate}
                    budget={proj.budget}
                    duration={proj.duration}
                    resourceNumber={proj.resourceNumber}
                    description={proj.description}
                    requiredSkills={proj.requiredSkills}
                    onViewProjectDetails = {() => handleShowProjectDetails(proj.id, proj.type)}
                />
            </Grid>
        );
})}


    </Box>
    </>
  )
}

export default BrowseProjects