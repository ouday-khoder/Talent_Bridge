import React from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import nusoftwhitelogo from '../../assets/nusoft-white.png';

const Footer = () => {
  return (
    <Grid container p={'2rem'} sx={{backgroundColor: '#0b4d90'}}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <img style={{width: '7rem', maxWidth: '100%'}} src={nusoftwhitelogo} alt='nusoft white logo' />
            <Typography>Lorem ipsum lorem ipsum lorem ipsum</Typography>
            <Stack direction={'row'}>
                icon
                icon
                icon
            </Stack>TEst__12345
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <Stack direction={'column'}>
            <Button>why nusoft</Button>
            <Button>why nusoft</Button>
            <Button>why nusoft</Button>
            <Button>why nusoft</Button>
            </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
        <Stack direction={'column'}>
            <Button>Freelancers</Button>
            <Button>Freelancers</Button>
            <Button>Freelancers</Button>
            <Button>Freelancers</Button>
            </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
            <Typography>How can we help you?</Typography>
            <Typography>Lorem ipsum lorem ipsum lorem ipsum</Typography>
            <Button>Contact US</Button>
            <Typography>© 2023 Nusoft. All rights reserved</Typography>
        </Grid>
    </Grid>
  )
}

export default Footer;