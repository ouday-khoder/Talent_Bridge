import React from 'react'
import { Button, IconButton, Stack, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';


const Search = () => {
  return (
    <Stack direction={'row'} sx={{alignItems: 'center'}}>
        <Button>Learn More</Button>
        <TextField placeholder='Search keyword' />
        <IconButton>
            <SearchIcon />
        </IconButton>
</Stack>
  )
}

export default Search