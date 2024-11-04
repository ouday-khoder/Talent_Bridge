import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
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

const SkillStep = () => {

  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleChange = (e) => {
    setSelectedSkills(e.target.value)
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

      <Button variant="contained" color="primary">
        Save
      </Button>
    </Box>
  )
}

export default SkillStep