import {
  Box,
  Button,
  Container,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import { useContext } from 'react';
import AppBarComp from '../../Components/AppBarComp';
import { AuthGoogleContext } from '../../hooks/authGoogle';

export default function Perfil() {
  const { user, signOut } = useContext(AuthGoogleContext);

  const userLogado = user;

  console.log(user);

  return (
    <Box>
      <AppBarComp rota="/" />
      <Container maxWidth="md">
        <Box
          width="100%"
          height="500px"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box width="200px" height="200px">
            <img
              src={userLogado.photoURL}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
              }}
              alt={userLogado.displayName}
            />
          </Box>
          <Box width="300px">
            <TextField
              disabled
              fullWidth
              id="outlined-disabled"
              label="Nome"
              defaultValue={userLogado.displayName}
              sx={{
                marginBottom: '15px',
                marginTop: '15px',
              }}
            />
            <TextField
              disabled
              fullWidth
              id="outlined-disabled"
              label="Email"
              defaultValue={userLogado.email}
              sx={{
                marginBottom: '15px',
              }}
            />
            <Button
              fullWidth
              onClick={signOut}
              variant="contained"
              color="error"
            >
              Sair
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
