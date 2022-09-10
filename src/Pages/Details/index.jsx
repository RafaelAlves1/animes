import { Box, Container, Link, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppBarComp from '../../Components/AppBarComp';

export default function Details() {
  const [animes, setAnimes] = useState([]);
  const [eps, setEps] = useState([]);
  const [genres, setGenres] = useState([]);

  const { animeId } = useParams();

  useEffect(() => {
    fetch(`https://gogoanime.herokuapp.com/anime-details/${animeId}`)
      .then((response) => response.json())
      .then((animelist) => {
        setAnimes(animelist);
        setEps(animelist.episodesList);
        setGenres(animelist.genres);
        console.log(animelist);
      });
  }, [animeId]);

  return (
    <>
      <AppBarComp rota="/" />
      <Container
        maxWidth="100vw"
        sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          background: '#0c0c0c',
          userSelect: 'none',
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="md">
          <Box
            display="flex"
            sx={{
              marginTop: '15px',
              marginBottom: '15px',
              display: 'flex',
            }}
          >
            <Box
              width="200px"
              height="250px"
              border="2px solid #6610f2"
              borderRadius="10px"
              marginRight="25px"
            >
              <img
                src={animes.animeImg}
                alt={animes.animeTitle}
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
              />
            </Box>
            <Box display="flex" flexDirection="column">
              <Box>
                <Typography color="#ccc">{animes.animeTitle}</Typography>
              </Box>
              <Box>
                <Typography color="#ccc">{animes.releasedDate}</Typography>
                <Typography color="#ccc">Generos</Typography>
                <Box display="flex" color="#ccc">
                  {genres.map((item) => (
                    <Typography>{item}</Typography>
                  ))}
                </Box>
                <Typography color="#ccc">{animes.status}</Typography>
                <Typography color="#ccc">{animes.totalEpisodes}</Typography>
              </Box>
            </Box>
          </Box>
          <Box width="100%" color="#ccc" marginBottom="15px">
            {animes.synopsis}
          </Box>
          {eps.map((item) => (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
              height="50px"
              sx={{
                border: '1px solid',
                marginBottom: '10px',
                paddingLeft: '5px',
              }}
            >
              <Typography color="#ccc"> Episódio {item.episodeNum}</Typography>
              <Link
                href={item.episodeUrl}
                target="_blank"
                sx={{
                  width: '100px',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#6610f2',
                  color: '#0c0c0c',
                  textDecoration: 'none',
                }}
              >
                Ver
              </Link>
            </Box>
          ))}
        </Container>
      </Container>
    </>
  );
}
