import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import DrawerComponent from './DrawerComponent'; 
import StudentList from './Student/StudentList';

const Dashboard = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Drawer Component */}
      <DrawerComponent />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          marginLeft: 240, 
          marginTop: 8, 
        }}
      >
        <AppBar position="fixed"
            sx={{
              backgroundColor: 'purple',
            }}>
          <Toolbar>
            <Typography variant="h6">LMS Dashboard</Typography>
            <IconButton
              edge="end"
              color="inherit"
              sx={{ marginLeft: 'auto', }}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Typography variant="h4">
          Learning Managment System
        </Typography>
        <Box component="main">
        <Typography variant="h4">Student List</Typography>
        <StudentList />
      </Box>

   

      </Box>
    </Box>
  );
};

export default Dashboard;
