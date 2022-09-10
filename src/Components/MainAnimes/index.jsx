import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function MainAnimes() {
  const [animes, setAnimes] = useState([]);
  const [page, setPage] = useState(5);

  useEffect(() => {
    fetch(`https://gogoanime.herokuapp.com/popular?page=${page}`)
      .then((response) => response.json())
      .then((animelist) => {
        setAnimes(animelist);
      });
  }, [page]);

  return (
    <>
      {animes.slice(0, 10).map((item) => (
        <Box display="flex" flexDirection="column">
          <Box
            width="200px"
            height="250px"
            ml="5px"
            mt="15px"
            position="relative"
          >
            <Link to={`/anime-details/${item.animeId}`} key={item.animeId}>
              <img
                src={item.animeImg}
                alt={item.animeTitle}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '5px',
                }}
              />
            </Link>
          </Box>
          <Box width="200px" ml="5px">
            <p
              style={{
                width: '100%',
                marginTop: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: '#fff',
              }}
            >
              {item.animeTitle}
            </p>
          </Box>
        </Box>
      ))}
    </>
  );
}
