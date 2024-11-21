import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, IconButton, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import UserNavbar from '../../UserNavbar/UserNavbar';
import axios from 'axios';
import ResultBox from './ResultBox/ResultBox';
import { useNavigate } from 'react-router-dom';


const BrowseFreelancers = () => {

  const [freelancers, setFreelancers] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/api/freelancers")
    .then(response => {
      setFreelancers(response.data)
    }).catch(error => {
      console.error("Error fetching freelancers", error);
    });
  }, [])

  const handleShowDetails = (id) => {
    navigate(`/freelancers/${id}`);
}

  return (
    <>
    <UserNavbar />
    <Container maxWidth="lg">
      <Box sx={{ 
          alignItems: 'center',
          border: '1px solid #d5e0d5',
          justifyContent: 'space-between',
          padding: '20px', 
          borderRadius: '20px',
          margin: '20px 0'}}>
          
          <Stack direction={"row"} sx={{justifyContent: 'space-between', alignItems: 'center', padding: '0 0 30px'}}>
              <Typography sx={{fontWeight: 'bold', fontSize: '20px', flex: '1'}}>Top Results</Typography>
              <form style={{flex: '1', display: 'flex', alignItems: 'center'}}>
              <TextField
                  variant="outlined"
                  placeholder="Search"
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
          <Grid container>
          {freelancers.map(freelancer => (
            <Grid item xs={12} md={3} key={freelancer.id}>
                <ResultBox
                    fullName={`${freelancer.firstName} ${freelancer.lastName}`}
                    jobTitle={freelancer.jobTitle}
                    bio={freelancer.bio}
                    country={freelancer.country}
                    hourlyRate={freelancer.hourlyRate}
                    onViewFreelancerDetails = {() => handleShowDetails(freelancer.id)}
                />
            </Grid>
            ))}
          </Grid>
      </Box>
    </Container>
    </>
  )
}

export default BrowseFreelancers;

