import React from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import classes from './Home.module.css';
import Search from './SearchInHome/Search';

const Home = ({ text, imageSrc, variant}) => {
  return (
        <Box className={classes.container}>
        <Grid container sx={{ alignItems: 'center', padding: '7rem 0 3rem' }}>
            {variant === 'search' ? (
            <>
                {/* Layout for 'search' variant */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Typography className={classes.hometext} dangerouslySetInnerHTML={{ __html: text }} />
                <Search />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <img src={imageSrc} alt="about us" style={{ maxWidth: '100%' }} />
                </Grid>
            </>
            ) : variant === 'apply' ? (
            <>
                {/* Layout for 'apply' variant */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <img src={imageSrc} alt="about us" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} >
                <Typography className={classes.hometext} dangerouslySetInnerHTML={{ __html: text }} />
                <Button variant="contained">Apply as Freelancer</Button>
                </Grid>
            </>
            ) : variant === 'hire' ? (
            <>
                {/* Layout for 'hire' variant */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <img src={imageSrc} alt="about us" style={{ maxWidth: '100%' }} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <Typography className={classes.hometext} dangerouslySetInnerHTML={{ __html: text }} />
                <Button variant="contained">Hire Now</Button>
                </Grid>
            </>
            ) : (
            <Grid item xs={12}>
                <Typography variant="h6">Invalid variant</Typography>
            </Grid>
            )}
        </Grid>
        </Box>
  );
};

export default Home;
