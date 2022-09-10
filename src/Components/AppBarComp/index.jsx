import { useContext, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import { AuthGoogleContext } from '../../hooks/authGoogle';
import { Menu, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

export default function AppBarComp({ rota }) {
  const { user, signOut } = useContext(AuthGoogleContext);

  const userLogado = user;

  const [anchorElUser, setAnchorElUser] = useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: '#6610f2',
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Link to={rota}>
              <Home
                sx={{
                  color: '#fff',
                }}
              />
            </Link>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Ver Opções">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={userLogado.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Link
                to="/perfil"
                style={{
                  textDecoration: 'none',
                }}
              >
                <MenuItem>
                  <Typography
                    textAlign="center"
                    sx={{
                      color: '#121212',
                    }}
                  >
                    Perfil
                  </Typography>
                </MenuItem>
              </Link>
              <MenuItem onClick={signOut}>
                <Typography textAlign="center">Sair</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
