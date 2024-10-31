import React from 'react'
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material'
import nusoftLogo from '../../assets/nusoft.png'
import NavDrawer from './NavDrawer';
import { NavLinks } from './NavLinks';

const Navbar = ({ signupRef }) => {
    
    const handleSignUpScroll = () => {
        if (signupRef.current) {
            signupRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

  return (
    <AppBar position='static' color='transparent' elevation={0}>
        <Container maxWidth="24px" sx={{borderBottom: '1px solid #E2E8F0', maxHeight: '59px'}}>
            <Toolbar disableGutters>
                <Box sx={{display: 'flex', alignItems: 'center', flex: '1'}}>
                    <Box sx={{display: {xs: 'block', md: 'none'}}}>
                        <NavDrawer linksprops = {NavLinks} />
                    </Box>
                    <Typography variant='h6' component='div' sx={{'@media(max-width: 900px)': {margin: 'auto'}, display: 'flex', alignItems:'center'}}>
                        <img src={nusoftLogo} alt='nusoft logo' style={{maxWidth: '7rem'}}/>
                    </Typography>
                    <Box sx={{marginLeft: '2.5rem', display: { xs: 'none', md: 'block' }}}>
                        {NavLinks.map((link, index) => (
                            <Button key={index} sx={{color: '#4a5568', fontSize: '0.875rem', fontWeight: '600', textTransform: 'capitalize'}}>{link.name}</Button>
                        ))}
                    </Box>
                </Box>
                <Box>
                    <Button
                        sx={{
                            color: '#718096', 
                            textTransform: 'capitalize', 
                            fontSize: '0.875rem',
                            margin: '0 10px 0 0',
                            fontWeight: '600',
                            '&:hover': {
                                backgroundColor: 'transparent',
                                textDecoration: 'underline',
                            }
                            }}
                            
                            >
                                Sign in
                        </Button>
                    <Button onClick={handleSignUpScroll}
                        sx={{
                            backgroundColor: '#ff4545', 
                            color: '#FFFFFF', 
                            textTransform: 'capitalize', 
                            fontSize: '0.875rem', 
                            margin: '0 10px 0 0',
                            fontWeight: '600', 
                            borderRadius: '50px',
                            '&:hover': {
                                backgroundColor: '#ee5d50'
                            }
                            }}
                            
                            >
                                Sign up
                    </Button>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar