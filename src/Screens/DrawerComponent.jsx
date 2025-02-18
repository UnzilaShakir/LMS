import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon, ExpandLess as ExpandLessIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const DrawerComponent = () => {
    const [openStudents, setOpenStudents] = useState(false);
    const [openTeachers, setOpenTeachers] = useState(false);
    const [openSubjects, setOpenSubjects] = useState(false);
    const [openSyllabus, setOpenSyllabus] = useState(false);
    const [openSchool, setOpenSchool] = useState(false);

    // Toggle Students dropdown
    const handleToggleStudents = () => setOpenStudents(!openStudents);

    // Toggle Teachers dropdown
    const handleToggleTeachers = () => setOpenTeachers(!openTeachers);

    // Toggle Subjects dropdown
    const handleToggleSubjects = () => setOpenSubjects(!openSubjects);

    // Toggle Syllabus dropdown
    const handleToggleSyllabus = () => setOpenSyllabus(!openSyllabus);

    // Toggle School dropdown
    const handleToggleSchool = () => setOpenSchool(!openSchool);

    return (
        <Drawer
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    marginTop: '64px',  // Adjust this to move drawer below the blue line (or header)
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {/* Dashboard Link */}
                <ListItem button component={Link} to="/dashboard">
                    <ListItemText primary="Dashboard" />
                </ListItem>

                {/* Students Dropdown */}
                <ListItem button onClick={handleToggleStudents}>
                    <ListItemText primary="Students" />
                    {openStudents ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={openStudents} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="student-add">
                            <ListItemText primary="Student Registration" sx={{ pl: 4 }} />
                        </ListItem>
                        <ListItem button component={Link} to="students-list">
                            <ListItemText primary="Student List" sx={{ pl: 4 }} />
                        </ListItem>
                    </List>
                </Collapse>

                {/* Teachers Dropdown */}
                <ListItem button onClick={handleToggleTeachers}>
                    <ListItemText primary="Teachers" />
                    {openTeachers ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={openTeachers} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/teachers">
                            <ListItemText primary="Teacher Registration" sx={{ pl: 4 }} />
                        </ListItem>
                        <ListItem button component={Link} to="/teachers">
                            <ListItemText primary=" Teacher List" sx={{ pl: 4 }} />
                        </ListItem>
                    </List>
                </Collapse>

                {/* Subjects Dropdown */}
                <ListItem button onClick={handleToggleSubjects}>
                    <ListItemText primary="Subjects" />
                    {openSubjects ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={openSubjects} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="subjects/add-edit">
                            <ListItemText primary="Subjects Add" sx={{ pl: 4 }} />
                        </ListItem>
                        <ListItem button component={Link} to="subjects/list">
                            <ListItemText primary="Subjects List" sx={{ pl: 4 }} />
                        </ListItem>
                    </List>
                </Collapse>

                {/* Syllabus Dropdown */}
                <ListItem button onClick={handleToggleSyllabus}>
                    <ListItemText primary="Syllabus" />
                    {openSyllabus ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={openSyllabus} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="Syllabus">
                            <ListItemText primary="Syllabus Form" sx={{ pl: 4 }} />
                        </ListItem>
                        <ListItem button component={Link} to="Syllabus">
                            <ListItemText primary="Syllabus List" sx={{ pl: 4 }} />
                        </ListItem>
                    </List>
                </Collapse>


                {/* School Dropdown */}
                <ListItem button onClick={handleToggleSchool}>
                    <ListItemText primary="School" />
                    {openSchool ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </ListItem>
                <Collapse in={openSchool} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="Student">
                            <ListItemText primary="Student Registration" sx={{ pl: 4 }} />
                        </ListItem>
                        <ListItem button component={Link} to="Teacher Registration">
                            <ListItemText primary="Teacher Registration" sx={{ pl: 4 }} />
                        </ListItem>
                    </List>
                </Collapse>


                <ListItem>
                    <ListItemText primary="Exam" />
                </ListItem>

            </List>
        </Drawer>
    );
};

export default DrawerComponent;
