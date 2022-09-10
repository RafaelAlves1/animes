import { Google } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthGoogleContext } from '../../hooks/authGoogle';

export default function Login() {
  const { signInGoogle, signed, user } = useContext(AuthGoogleContext);
  const [animes, setAnimes] = useState([]);

  useEffect(() => {
    fetch(`https://gogoanime.herokuapp.com/popular`)
      .then((response) => response.json())
      .then((animelist) => {
        setAnimes(animelist);
      });
  }, []);

  async function loginGoogle() {
    await signInGoogle();
  }

  if (!signed) {
    return (
      <Box
        height="100vh"
        width="100vw"
        sx={{
          background: '#0c0c0c',
          position: 'relative',
        }}
      >
        <Box
          width="350px"
          height="450px"
          sx={{
            backgroundColor: '#33333326',
            boxShadow: '3px 2px 5px #11111180',
            backdropFilter: 'blur(8px)',
            borderRadius: '15px',
            position: 'absolute',
            top: '30%',
            left: '40%',
          }}
        >
          {animes.slice(0, 1).map((item) => (
            <img
              src={item.animeImg}
              style={{
                width: '100px',
                height: '100px',
                position: 'absolute',
                left: '35%',
                top: '50px',
              }}
              alt="Bem vindo"
            />
          ))}
          <button
            style={{
              width: '100%',
              height: '40px',
              background: '#6610f2',
              bottom: 0,
              position: 'absolute',
              border: 'none',
              cursor: 'pointer',
            }}
            onClick={loginGoogle}
          >
            <Typography color="#fff" variant="button">
              Entrar com o Google
            </Typography>
          </button>
        </Box>
      </Box>
    );
  } else {
    return <Navigate to="/" />;
  }
}
