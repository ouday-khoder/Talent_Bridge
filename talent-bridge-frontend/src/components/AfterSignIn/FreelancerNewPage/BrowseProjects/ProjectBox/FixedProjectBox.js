import React from 'react';
import { Box, Typography } from '@mui/material';

const FixedProjectBox = ({ type, name, dueDate, description, requiredSkills, onViewProjectDetails }) => {
  return (
    <Box onClick={onViewProjectDetails}>
      <Typography variant="h6">Type: {type}</Typography>
      <Typography variant="body2">Name: {name}</Typography>
      <Typography variant="body2">Due Date: {dueDate}</Typography>
      <Typography variant="body2">Description: {description}</Typography>
      <Typography variant="body2">Required Skills: {requiredSkills}</Typography>
    </Box>
  );
}

export default FixedProjectBox;

