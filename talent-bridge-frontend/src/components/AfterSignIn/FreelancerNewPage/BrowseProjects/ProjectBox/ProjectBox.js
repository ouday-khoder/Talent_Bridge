import React from 'react';
import { Box } from '@mui/material';
import FixedProjectBox from './FixedProjectBox';
import HourlyProjectBox from './HourlyProjectBox';

const ProjectBox = ({
  type,
  name,
  description,
  requiredSkills,
  budget,
  duration,
  startDate,
  resourceNumber,
  dueDate,
  onViewProjectDetails
}) => {
  
  return (
    <Box
      sx={{
        border: '1px solid #d5e0d5',
        borderRadius: '10px',
        padding: '10px',
        marginBottom: '10px',
        ":hover": {
          backgroundColor: '#0b4d90',
          color: 'white',
          fontWeight: 'bold',
          transition: '.6s',
          cursor: 'pointer',
        }
      }}
      
    >
      
      {type === 'fixed' ? (
        <FixedProjectBox
          type={type}
          name={name}
          description={description}
          dueDate={dueDate} 
          requiredSkills={requiredSkills}
          onViewProjectDetails={onViewProjectDetails}
        />
      ) : (
        <HourlyProjectBox
          type={type}
          name={name}
          description={description}
          startDate={startDate} 
          duration={duration} 
          budget={budget} 
          resourceNumber={resourceNumber} 
          requiredSkills={requiredSkills}
          onViewProjectDetails={onViewProjectDetails}
        />
      )}
    </Box>
  );
}

export default ProjectBox;


