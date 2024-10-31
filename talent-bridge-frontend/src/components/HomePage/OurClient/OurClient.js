import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import maskgroup4 from '../../../assets/icons/Mask group-4.png';

const OurClient = () => {

  return (
    <Box>
        <Typography sx={{textAlign: 'center', fontSize: '3rem', fontWeight: 'bold', color: '#0b4d90'}}>Our Client</Typography>
        <Stack sx={{justifyContent: 'space-between'}} direction={'row'}>
            <img style={{width : '200px', maxWidth: '100%', maxHeight: 'auto'}} src={maskgroup4} alt='mask group'/>
            <img style={{width : '200px', maxWidth: '100%', maxHeight: 'auto'}}  src={maskgroup4} alt='mask group'/>
            <img style={{width : '200px', maxWidth: '100%', maxHeight: 'auto'}} src={maskgroup4} alt='mask group'/>
            <img style={{width : '200px', maxWidth: '100%', maxHeight: 'auto'}} src={maskgroup4} alt='mask group'/>
        </Stack>
    </Box>
  )
}

export default OurClient