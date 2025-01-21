import React from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';
import imgg from '../image/profile.jpeg'

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#1E88E5' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{ color: '#FFFFFF', fontWeight: 'bold' }}
        >
          Detrator
        </Typography>

        <Box
          sx={{
            display: { xs: 'none', sm: 'flex' }, 
            alignItems: 'center',
            backgroundColor: '#FFFFFF',
            borderRadius: 2,
            px: 1,
            py: 0.5,
            width: '40%',
          }}
        >
          <SearchIcon sx={{ color: '#9E9E9E' }} />
          <InputBase
            placeholder="Search..."
            sx={{
              ml: 1,
              flex: 1,
              color: '#424242',
              fontSize: '14px',
            }}
          />
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{ mt: { xs: 1, sm: 0 } }}
        >
          <Image
            src= {imgg}
            alt="Profile"
            width={40}
            height={40}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
          <Typography
            variant="body1"
            sx={{
              color: '#FFFFFF',
              fontWeight: '500',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Dharam
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
