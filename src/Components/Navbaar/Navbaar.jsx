import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import { ThemeProvider } from '@mui/material/styles';
import { nav } from "../theme";

const menuItems = ['Home', 'About', 'Services', 'Contact'];
const userMenuItems = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [navMenuOpen, setNavMenuOpen] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(null);

  const handleNavMenuOpen = (event) => {
    setNavMenuOpen(event.currentTarget);
  };

  const handleUserMenuOpen = (event) => {
    setUserMenuOpen(event.currentTarget);
  };

  const closeNavMenu = () => {
    setNavMenuOpen(null);
  };

  const closeUserMenu = () => {
    setUserMenuOpen(null);
  };

  return (
    <ThemeProvider theme={nav}> 
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              {/* Mobile Nav Menu */}
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="mobile-menu"
                aria-haspopup="true"
                onClick={handleNavMenuOpen}
                color="inherit"
                sx={{ display: { xs: 'flex', md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              {/* Logo */}
              <Typography variant="h6" noWrap component="span" sx={{ mr: 2,fontWeight: 'bold' }}>
                Chat App
              </Typography>
            </Box>

            {/* Desktop Nav Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  onClick={closeNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* User Profile */}
            <Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleUserMenuOpen} sx={{ p: 0 }}>
                  <Avatar alt="User Avatar" src="/path-to-avatar-image.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                id="user-menu"
                anchorEl={userMenuOpen}
                keepMounted
                open={Boolean(userMenuOpen)}
                onClose={closeUserMenu}
              >
                {userMenuItems.map((item) => (
                  <MenuItem key={item} onClick={closeUserMenu}>
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
