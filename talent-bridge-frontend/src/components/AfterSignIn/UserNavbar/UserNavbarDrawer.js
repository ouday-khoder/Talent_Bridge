import React, { useState } from 'react';
import { Drawer, Box, Button, IconButton, Stack, Container } from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

import nusoftLogo from '../../../assets/nusoft.png';

export const linkStyle = {
    fontWeight: 'bold',
    textDecoration: 'none',
    textTransform: 'capitalize',
    fontSize: '12px',
    color: '#00A081',
    "&:hover": {
        backgroundColor: 'transparent'
    }
};


const UserNavbarDrawer = (props) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <Box>
                <IconButton onClick={toggleDrawer(true)} sx={{padding: '5px', border: '1px solid', margin: '0 0 0 10px'}}>
                    <MenuRoundedIcon sx={{color: '#4a5568'}} />
                </IconButton>
                <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                    <Container>
                            <img src={nusoftLogo} alt='nusoft logo' style={{maxWidth: '7rem'}}/>
                        <Stack direction={'column'} sx={{alignItems: 'start', maxWidth: '100%', '& .MuiSvgIcon-root': {fontSize: '13px'}}}>
                            {props.linksprops.map((link, index) => (
                                <Button key={index} sx={{color: '#4a5568', fontSize: '0.775rem', fontWeight: 'bold', textTransform: 'capitalize'}}>{link.name}</Button>
                            ))}
                        </Stack>
                    </Container>
                </Drawer>
        </Box>
    );
};

export default UserNavbarDrawer;