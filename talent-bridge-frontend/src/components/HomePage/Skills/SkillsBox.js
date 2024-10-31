import React from 'react'
import {Grid, Typography } from '@mui/material'

const SkillsBox = ({image, title, description}) => {
  return (
  
            <Grid container sx={{justifyContent: 'center'}}>
                <Grid item>
                    <img style={{maxWidth: '100px'}} src={image} alt='mask group' />
                    <Typography>{title}</Typography>
                    <Typography>{description}</Typography>
                </Grid>
            </Grid>
  )
}

export default SkillsBox