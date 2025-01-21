import React from 'react';
import { Box, Typography } from '@mui/material';

const Content = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        gap: 2,
        p: 2,
        minHeight: '70vh',
        backgroundColor: '#F5F5F5',
      }}
    >
      <Box
        sx={{
          flex: 1,
          backgroundColor: '#E3F2FD',
          p: 3,
          borderRadius: 2,
          minHeight: { xs: 'calc(100vh - 64px)', sm: 'auto' }, 
        }}
      >
        <Typography variant="h5" gutterBottom>
          About Us
        </Typography>
        <Typography>
          At Detrator, we believe that a quality website is not an expense but rather an investment. We specialize in creating innovative, user-friendly websites that drive success for businesses.
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          backgroundColor: '#E3F2FD',
          p: 3,
          borderRadius: 2,
          display: { xs: 'none', sm: 'block' }, 
        }}
      >
        <Typography variant="h5" gutterBottom>
          Our Vision
        </Typography>
        <Typography>
          Our mission is to empower businesses by delivering high-quality, scalable, and aesthetically pleasing websites tailored to meet their unique needs.
        </Typography>
      </Box>
    </Box>
  );
};

export default Content;
