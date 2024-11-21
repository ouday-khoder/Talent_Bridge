import { Box, Container, Stack, Typography, Button  } from '@mui/material'
import React, { useEffect, useState } from 'react'
import UserNavbar from '../../../UserNavbar/UserNavbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FreelancerDetailsPage = () => {
    const { id } = useParams();
    const [freelancer, setFreelancer] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:8080/api/freelancers/${id}`)
        .then(response => {
            setFreelancer(response.data);
        }).catch(error => {
            console.error('Error fetching freelancer details', error);
        });
    }, [id]);

    if (!freelancer) {
        return <Typography>Loading...</Typography>;
    }


  return (
    <>
    <UserNavbar />
    <Container maxWidth="md" sx={{ marginTop: '20px' }}>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
            <Box sx={{ border: '1px solid #d5e0d5', padding: '20px', borderRadius: '10px' }}>
                <Typography variant="h4">{`${freelancer.firstName} ${freelancer.lastName}`}</Typography>
                <Typography variant="h6">{freelancer.jobTitle}</Typography>
                <Typography variant="body2">{freelancer.country}</Typography>
            </Box>
            <Box>
                    <Button>Message</Button>
            </Box>
    </Stack>
        <Box>
            <Typography variant="h6">Languages</Typography>
            <Typography variant="body2">English: Fluent</Typography>
            <Typography variant="body2">Arabic: Native Language</Typography>
            <Typography variant="h6">Education</Typography>
            <Typography variant="body2">Lebanese University- Faculty of science</Typography>
        </Box>
    </Container>
    </>
  )
}

export default FreelancerDetailsPage