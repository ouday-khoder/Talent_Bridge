import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'

const skillOption = [
  'JavaScript',
  'Python',
  'Java',
  'React',
  'Node.js',
  'CSS',
  'HTML'
]

const SkillStep = ({freelancerId, handleProfileSaved}) => {

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChange = (e) => {
    setSelectedSkills(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`http://localhost:8080/api/freelancers/${freelancerId}/skills`, selectedSkills)
    .then(response => {
      console.log("Skills saved successfully");
      console.log(response.data);
      handleProfileSaved();
    })
    .catch(error => {
      console.error("Error saving skills", error);
    });
  }


  return (
    <Box>
      <Typography>
      What work are you here to do? Your skill shows clients what you can offer and helps us choose which jobs to recommend to you.
      </Typography>

      <FormControl fullWidth margin='normal'>
        <InputLabel>Skill</InputLabel>
        <Select
        multiple
        value={selectedSkills}
        onChange={handleChange}
        label="Skill"
        renderValue={(selected) => selected.join(', ')}
        >

            {skillOption.map((skill) => (
              <MenuItem  key={skill} value={skill}>
                {skill}
              </MenuItem>
            ))}
        </Select>
      </FormControl>

      <Button onClick={handleSubmit} variant="contained" color="primary">
        Save
      </Button>
    </Box>
  )
}

export default SkillStep