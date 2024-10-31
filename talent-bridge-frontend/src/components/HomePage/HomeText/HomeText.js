import { Box, Typography } from '@mui/material'
import React from 'react'
import servicesImage from '../../../assets/services.png'


const HomeText = () => {
  return (
    <Box>
        <Typography>
            At Nusoft, we've revolutionized the freelance marketplace to address the key concerns faced by talented freelancers like you.
        </Typography>
        <Typography>
            We understand the frustrations of hunting for opportunities and dealing with payment issues. That's why we've built a platform that sets us apart from existing platforms, offering unique benefits tailored to your needs. We offer abundant opportunities, guaranteed payments, transparent communication and a supportive community.
        </Typography>
        <img src={servicesImage} alt='services' style={{maxWidth: '100%'}}/>
    </Box>
  )
}

export default HomeText