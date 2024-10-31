import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';

const MissionCard = ({ icon, title, text, variant }) => {
  const styles = {
    default: {
      maxWidth: 345,
      margin: 1,
      border: '2px solid',
      borderRadius: '20px',
    },
    noBorder: {
      maxWidth: 345,
      margin: 1,
      borderRadius: '20px',
    },
  };

  const cardStyle = variant === 'noBorder' ? styles.noBorder : styles.default;

  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          <img src={icon} alt="icon" />
        </Box>
        <Typography
          variant="h5"
          component="div"
          align="center"
          sx={{ color: '#FF4545', fontSize: '1.125rem', margin: '10px 0 0' }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ color: '#0b4d90', fontSize: '1.125rem', margin: '10px 0 0' }}
        >
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MissionCard;
