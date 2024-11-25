import React from 'react'
import { Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import UserNavbar from '../../UserNavbar/UserNavbar';

const BrowseProjects = () => {
  return (
    <>
    <UserNavbar />
    <Box sx={{ 
        alignItems: 'center',
        border: '1px solid #d5e0d5',
        justifyContent: 'space-between',
        padding: '20px', 
        borderRadius: '20px',
        margin: '20px 0'
        }}>
        
        <Stack direction={"row"} sx={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Typography sx={{fontWeight: 'bold', fontSize: '20px', flex: '1'}}>Jobs you might like</Typography>
            <form style={{flex: '1', display: 'flex', alignItems: 'center'}}>
            <TextField
                variant="outlined"
                placeholder="your email address"
                fullWidth
                sx={{   
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '50px',
                    },
                    '& .MuiInputBase-input': {
                        padding: '10px 20px',
                    },
                }}
            />
            <IconButton>
                <SearchIcon />
            </IconButton>
            </form>
        </Stack>
    </Box>
    </>
  )
}

export default BrowseProjects