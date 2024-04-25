import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  Hidden,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import logo from '../../assets/OBroderie_logo.png';

import { logout } from '../../actions/user';

const categories = [
  { name: 'Clients', route: '/clients' },
  { name: 'Broderies', route: '/broderies' },
  { name: 'Textiles', route: '/textiles' },
  { name: 'Devis', route: '/devis' },
  { name: 'Commandes', route: '/commandes' },
  { name: 'Factures', route: '/factures' },
];

function Header() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleLogout = () => {
    dispatch(logout());
    // Rediriger vers la page d'authentification
    window.location.href = '/';
  };

  return (
    <>
      <AppBar position="sticky" style={{ backgroundColor: '#f0f0f0' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: '80px', height: 'auto', paddingBottom: '1rem' }}
              />
            </div>
            <Hidden mdUp>
              <IconButton
                edge="end"
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenDrawer}
                color="inherit"
              >
                <MenuIcon style={{ color: 'black' }} />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Box>
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.route}
                    style={{ textDecoration: 'none', color: 'black' }}
                  >
                    <Button style={{ marginLeft: 10 }}>{category.name}</Button>
                  </Link>
                ))}

                <Button onClick={handleLogout} style={{ marginLeft: 10 }}>
                  Déconnexion
                </Button>
              </Box>
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="right" open={openDrawer} onClose={handleCloseDrawer}>
        <List>
          {categories.map((category) => (
            <ListItem button key={category.name} />
          ))}
        </List>
      </Drawer>
    </>
  );
}

export default Header;
