import React from 'react';
import { Box, Typography } from '@mui/material';

const HourlyProjectBox = ({ type, name, description, startDate, duration, budget, resourceNumber, requiredSkills, onViewProjectDetails }) => {
  return (
    <Box onClick={onViewProjectDetails}>
      <Typography variant="h6">Type: {type}</Typography>
      <Typography variant="body2">Name: {name}</Typography>
      <Typography variant="body2">Start Date: {startDate}</Typography>
      <Typography variant="body2">Duration: {duration} hours</Typography>
      <Typography variant="body2">Budget: ${budget}</Typography>
      <Typography variant="body2">Resource Number: {resourceNumber}</Typography>
      <Typography variant="body2">Description: {description}</Typography>
      <Typography variant="body2">Required Skills: {requiredSkills}</Typography>
    </Box>
  );
}

export default HourlyProjectBox;

