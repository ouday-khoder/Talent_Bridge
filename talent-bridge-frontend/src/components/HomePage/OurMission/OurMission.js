import { Box, Typography } from '@mui/material'
import React from 'react'
import homepage6 from '../../../assets/home-page6.png';
import MissionCard from './MissionCard/MissionCard';

const OurMission = () => {
    const projectData = [
            {
                icon: homepage6,
                title: 'Empowering Connections',
                text: 'Nusoft facilitates meaningful connections between clients and top tech talent, enabling mutually beneficial collaborations.',
            },
            {
                icon: homepage6,
                title: 'Transforming Through Technology',
                text: 'Nusoft believes in the transformative potential of technology to revolutionize businesses and society.',
            },
            {
                icon: homepage6,
                title: 'Simplified Collaboration',
                text: 'Nusoft is committed to streamlining the process of connecting and collaborating for both clients and freelancers, fostering efficient and successful project outcomes.',
            },
    ]
    const featuresData = [
        {
            icon: homepage6,
            title: 'Secure, Transparent, Trustworthy',
            text: 'Our platform facilitates transparent and secure transactions, ensuring a fair and trustworthy working environment for all parties involved.',
        },
        {
            icon: homepage6,
            title: 'Secure, Transparent, Trustworthy',
            text: 'Our platform facilitates transparent and secure transactions, ensuring a fair and trustworthy working environment for all parties involved.',
        },
        {
            icon: homepage6,
            title: 'Secure, Transparent, Trustworthy',
            text: 'Our platform facilitates transparent and secure transactions, ensuring a fair and trustworthy working environment for all parties involved.',
        },
]
  return (
    <>
        <Box sx={{textAlign: 'center', padding: '3rem 0', backgroundColor: '#e2e8f033', borderRadius: '50px', margin: '3rem 0 0'}}>
            <Typography sx={{fontSize: '3rem'}}>Our Mission</Typography>
            <Typography variant='body2' sx={{color: '#0b4d90'}}>At Nusoft, our mission is to help clients find the best tech talent and help freelancers find rewarding projects. We believe in the power of technology to transform businesses and society, and we are committed to making it easier for clients and freelancers to connect and collaborate.</Typography>
            <Box display="flex" justifyContent="center" flexWrap="wrap" p={2}>
                {projectData.map((item, index) => (
                    <MissionCard 
                        variant={'default'} 
                        key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        text={item.text} 
                        />
                ))}
            </Box>
        </Box>
        <Box display="flex" justifyContent="center" flexWrap="wrap" p={2}>
                {featuresData.map((item, index) => (
                    <MissionCard 
                        variant={'noBorder'} 
                        key={index} 
                        icon={item.icon} 
                        title={item.title} 
                        text={item.text}
                        />
                ))}
            </Box>
    </>
  )
}

export default OurMission