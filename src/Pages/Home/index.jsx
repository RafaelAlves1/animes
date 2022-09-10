import { Box, Container } from '@mui/material';
import { useContext } from 'react';
import AppBarComp from '../../Components/AppBarComp';
import MainAnimes from '../../Components/MainAnimes';
import FourAnimes from '../../Components/FourAnimes';
import { AuthGoogleContext } from '../../hooks/authGoogle';

export default function Home() {
  const { user, signOut } = useContext(AuthGoogleContext);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: '#0c0c0c',
      }}
    >
      <AppBarComp rota="/" />
      <FourAnimes />
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <MainAnimes />
      </Container>
    </Box>
  );
}
