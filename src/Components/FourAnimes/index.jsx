import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FourAnimes() {
  const [fourAnimes, setFourAnimes] = useState([]);

  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://gogoanime.herokuapp.com/popular?page=${page}`)
      .then((response) => response.json())
      .then((animelist) => {
        setFourAnimes(animelist);
      });
  }, [page]);

  return (
    <>
      <Container
        sx={{
          minWidth: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {fourAnimes.slice(0, 4).map((animes) => (
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              width: 'calc(100% / 4)',
              marginLeft: '5px',
            }}
          >
            <Box width="100%" height="250px" mt="15px" position="relative">
              <Link
                to={`/anime-details/${animes.animeId}`}
                key={animes.animeId}
              >
                <img
                  src={animes.animeImg}
                  alt={animes.animeTitle}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '5px',
                    objectFit: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100%',
                  }}
                />
              </Link>
            </Box>
          </Box>
        ))}
      </Container>
    </>
  );
}
