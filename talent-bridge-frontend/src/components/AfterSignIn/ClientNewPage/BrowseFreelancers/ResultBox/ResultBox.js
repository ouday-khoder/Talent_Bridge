import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

const ResultBox = ({fullName, bio, jobTitle, country, hourlyRate }) => {


  return (
    <Box sx={{ 
        border: '1px solid #d5e0d5',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px'
      }}>
      <Typography variant="h6">{fullName}</Typography>
      <Typography variant="body2">{jobTitle}</Typography>
      <Typography variant="body2">{bio}</Typography>
      <Stack sx={{justifyContent: 'space-between'}} direction={"row"}>
        <Typography variant="body2">{country}</Typography>
        <Typography variant="body2">${hourlyRate} / hr</Typography>
      </Stack>

      <Button >view details</Button>
    </Box>
  );
};

export default ResultBox;