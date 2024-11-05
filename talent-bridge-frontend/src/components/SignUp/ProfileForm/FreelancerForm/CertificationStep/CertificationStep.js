import { Box, Button, IconButton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';

const CertificationStep = ({freelancerId}) => {

  const [certifications, setCertifications] = useState([]);

  const navigate=useNavigate();

  const handleCertificationButton = () => {
    navigate("/certificationForm", {state: {freelancerId}});
  }

  useEffect(() => {
    const fetchCertifications = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/freelancers/${freelancerId}/certifications`);
            setCertifications(response.data);
        } catch (error) {
            console.error("Error fetching certifications:", error.response ? error.response.data : error.message);
        }
    };

    fetchCertifications();
}, [freelancerId]);
  


  return (
    <Box>
          <Typography>
            If you have any certifications add it here it will make you more visible
          </Typography>
          <Typography>
            Certifications are very helpful clients like them.
          </Typography>

          <IconButton onClick={handleCertificationButton}>
            <AddCircleIcon />
          </IconButton>

          <Typography>Add certification</Typography>

          {certifications.map((cert) => (
                <Box key={cert.id} sx={{ mb: 2, p: 2, border: '1px solid #ccc' }}>
                    <Typography variant="h6">{cert.name}</Typography>
                    <Typography variant="body2">{cert.issuedOrganization}</Typography>
                    <Typography variant="body2">{cert.issuedDate}</Typography>
                    <Typography variant="body1">{cert.description2}</Typography>
                </Box>
            ))}
            <Button type="submit" variant="contained" color="primary">
                Save
            </Button>
    </Box>
  )
}

export default CertificationStep



