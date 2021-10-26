import React from 'react';
import { useState } from 'react'
import {Navbar, Container} from 'react-bootstrap'
import Logo from '../img/Logo_NBS.png'
import { Button, Drawer, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    left: false
  });

const toggleDrawer = (anchor, open) => (event) => {
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    return;
  }
  setState({ ...state, [anchor]: open });
};

const list = (anchor) => (
  <Box
    sx={{ width: 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      <ListItem>
        <ListItemText primary={"Menu"} />
      </ListItem>
    </List>
    <Divider/>
    <List>
      <ListItem button key={"Add Picture"}>
        <ListItemIcon>
          <AddAPhotoIcon />
        </ListItemIcon>
        <ListItemText primary={"Add Picture"} />
      </ListItem>
    </List>
  </Box>
);

return (
  <Navbar bg="dark" variant="dark">
    <Container>
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}><MenuIcon /></Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <Navbar.Brand href="#home">
        <img src={Logo} height="30" className="d-inline-block align-top m-2" alt="React Bootstrap logo" />
        {/* <Typography variant="h3" gutterBottom component="div">
          Seenic
        </Typography> */}
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Project by <a href="https://github.com/ChrisGallo17/Seenic">Chris G</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)
}