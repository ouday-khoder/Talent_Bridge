import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const MenuOption = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [initials, setInitials] = useState('');
    const navigate = useNavigate(); 

    const handleClick = (event) => {
        setAnchorEl((prev) => (prev ? null : event.currentTarget));
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        handleClose();
        navigate('/');
    };

    return (
        <div>
            <IconButton onClick={handleClick}>
                <Avatar>
                    {initials}
                </Avatar>
                <KeyboardArrowDownIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
            </Menu>
        </div>
    );
};

export default MenuOption;
