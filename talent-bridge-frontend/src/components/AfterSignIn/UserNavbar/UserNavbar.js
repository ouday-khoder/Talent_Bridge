import React, { useEffect, useState } from 'react';
import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import nusoftLogo from '../../../assets/nusoft.png';
import UserNavbarDrawer from './UserNavbarDrawer';
import { Link, useLocation } from 'react-router-dom';
import MenuOption from './MenuOption/MenuOption';

const UserNavbar = () => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(null);

    const userRole = localStorage.getItem('userRole');

    useEffect(() => {
        const currentLink = linkItems.find(item => item.link === location.pathname);
        if (currentLink) {
            setActiveLink(currentLink.id);
        }
    }, [location.pathname]);



    const clientLinkItems = [
        {id: 1, name: 'Browse Freelancers', link: '/client/browse-freelancers' },
        {id: 2, name: 'Post Project', link: '/client/post-project' },
        {id: 3, name: 'My Projects', link: '/client/posted-projects' },
        {id: 4, name: 'Messages', link: '/client/messages' },
        {id: 5, name: 'Pricing', link: '/client/pricing' },
        {id: 6, name: 'Contact Us', link: '/client/contact-us' },
    ];

    const freelancerLinkItems = [
        {id: 1, name: 'Browse Projects', link: '/freelancer/browse-projects' },
        {id: 2, name: 'My Projects', link: '/freelancer/my-projects' },
        {id: 3, name: 'Messages', link: '/messages' },
        {id: 4, name: 'Pricing', link: '/pricing' },
        {id: 5, name: 'Contact Us', link: '/contact-us' },
    ];



    const linkItems = userRole === 'client' ? clientLinkItems : freelancerLinkItems;

    return (
        <AppBar position='static' color='transparent' elevation={0}>
            <Container maxWidth="24px" sx={{borderBottom: '1px solid #E2E8F0', maxHeight: '59px'}}>
                <Toolbar disableGutters>
                    <Box sx={{display: 'flex', alignItems: 'center', flex: '1'}}>
                        <Box sx={{display: {xs: 'block', md: 'none'}}}>
                            <UserNavbarDrawer linksprops={linkItems} />
                        </Box>
                        <Typography variant='h6' component='div' sx={{'@media(max-width: 900px)': {margin: 'auto'}, display: 'flex', alignItems:'center'}}>
                            <img src={nusoftLogo} alt='nusoft logo' style={{maxWidth: '7rem'}}/>
                        </Typography>
                        <Box sx={{marginLeft: '2.5rem', display: { xs: 'none', md: 'block' }}}>
                            {linkItems.map((item) => (
                                <Button 
                                    component={Link}
                                    onClick={() => setActiveLink(item.id)}
                                    to={item.link}
                                    key={item.id}
                                    sx={{
                                        fontSize: '0.875rem', 
                                        fontWeight: '600', 
                                        textTransform: 'capitalize',
                                        color: activeLink === item.id ? 'red' : '#4A5568',
                                    }}>
                                    {item.name}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box>
                        <MenuOption />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default UserNavbar;
