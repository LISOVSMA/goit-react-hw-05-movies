import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCredits } from 'services/moviesApi';
import { List, Item } from './Credits.styled';
import image from '../../images/image.png';

const Credits = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const movieCredits = async () => {
      try {
        const response = await getCredits(movieId);
        setCast(response);
      } catch (error) {
        console.error(error);
      }
    };

    movieCredits();
  }, [movieId]);

  return (
    <>
      {cast.length !== 0 && (
        <div>
          <h2>Movie Cast</h2>
          <List>
            {cast.map(actor => (
              <Item key={actor.id}>
                <img
                  width="260px"
                  height="360px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${image}`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </Item>
            ))}
          </List>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie</div>}
    </>
  );
};

export default Credits;
