import React from 'react';
import { Box, Button, Grid, Typography, Card, CardContent, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupPage = React.forwardRef((props, ref) => {

    const navigate = useNavigate();

    const handleClientSignup = () => {
        navigate('/signup/client');
    }

    
  return (
    <Box ref={ref} sx={{ textAlign: 'center', padding: '3rem 0', backgroundColor: '#e2e8f033', borderRadius: '50px'}}>
        <Typography variant="h3" gutterBottom>
            Join as a client or freelancer
        </Typography>
        <Grid container spacing={3} justifyContent="center">
            <Grid item>
            <Card>
                <CardContent>
                <Typography variant="h5">I'm a Client</Typography>
                <Typography variant="body2">Hiring for a project</Typography>
                </CardContent>
                <CardActions>
                <Button onClick={handleClientSignup} variant="contained" color="primary">Join as a Client</Button>
                </CardActions>
            </Card>
            </Grid>
            <Grid item>
            <Card>
                <CardContent>
                <Typography variant="h5">I'm a Freelancer</Typography>
                <Typography variant="body2">Looking for work</Typography>
                </CardContent>
                <CardActions>
                <Button variant="contained" color="primary">Join as a Freelancer</Button>
                </CardActions>
            </Card>
            </Grid>
        </Grid>
        <Box mt={3}>
            <Typography variant="body2">
            Already have an account? <a href="/signin">Sign in</a>
            </Typography>
        </Box>
        </Box>
  );
});

export default SignupPage;
