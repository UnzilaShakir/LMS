import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Collapse, ListItemIcon, Toolbar, AppBar, Typography, IconButton } from '@mui/material';
import { ExpandLess, ExpandMore, Menu as MenuIcon, Dashboard, People, School, Class, Book, AccountBalance, Event, Add } from '@mui/icons-material';

const MainDashboard = () => {
  const [open, setOpen] = useState({});const [drawerOpen, setDrawerOpen] = useState(true);

  const handleToggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'purple' }}>
        <Toolbar>
          <IconButton color="inherit" onClick={handleDrawerToggle} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" noWrap>
            LMS 
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" open={drawerOpen} sx={{ width: 240, '& .MuiDrawer-paper': { width: 240, boxSizing: 'border-box' } }}>
        <Toolbar />
        <List>
          {/* <ListItem button component={Link} to="/">
            <ListItemIcon><Dashboard /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem> */}
          
          {/* Students Dropdown */}
          <ListItem button onClick={() => handleToggle('students')}>
            <ListItemIcon><People /></ListItemIcon>
            <ListItemText primary="Students" />
            {open.students ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.students} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/students">
                <ListItemText primary="Add/Edit" sx={{ pl: 4 }} />
              </ListItem>
              <ListItem button component={Link} to="/students">
                <ListItemText primary="List" sx={{ pl: 4 }} />
              </ListItem>
            </List>
          </Collapse>

          {/* Teachers Dropdown */}
          <ListItem button onClick={() => handleToggle('teachers')}>
            <ListItemIcon><School /></ListItemIcon>
            <ListItemText primary="Teachers" />
            {open.teachers ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open.teachers} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button component={Link} to="/teachers">
                <ListItemText primary="Add/Edit" sx={{ pl: 4 }} />
              </ListItem>
              <ListItem button component={Link} to="/teachers">
                <ListItemText primary="List" sx={{ pl: 4 }} />
              </ListItem>
            </List>
          </Collapse>
        </List>

            {/* Subjects Dropdown */}
            <ListItem button onClick={() => handleToggle('subjects')}>
              <ListItemIcon><Book /></ListItemIcon>
              <ListItemText primary="Subjects" />
              {open.subjects ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open.subjects} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="subjects/add-edit">
                  <ListItemText primary="Add/Edit" sx={{ pl: 4 }} />
                </ListItem>
                <ListItem button component={Link} to="subjects/list">
                  <ListItemText primary="List" sx={{ pl: 4 }} />
                </ListItem>
              </List>
            </Collapse>

               {/* School */}
              <ListItem button component={Link} to="school">
              <ListItemIcon><School /></ListItemIcon>
              <ListItemText primary="School" />
            </ListItem>

           {/* Syllabus Dropdown */}
           <ListItem button onClick={() => handleToggle('syllabus')}>
              <ListItemIcon><Book /></ListItemIcon>
              <ListItemText primary="Syllabus" />
              {open.syllabus ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open.syllabus} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button component={Link} to="syllabus/form">
                  <ListItemText primary="Form" sx={{ pl: 4 }} />
                </ListItem>
                <ListItem button component={Link} to="syllabus/list">
                  <ListItemText primary="List" sx={{ pl: 4 }} />
                </ListItem>
              </List>
            </Collapse>
      </Drawer>

      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Toolbar />
        <Typography variant="h4">Learning Managment System</Typography>
      </main>
    </div>
  );
};

export default MainDashboard;
