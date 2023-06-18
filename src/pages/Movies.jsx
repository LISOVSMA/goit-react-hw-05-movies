import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { getSearchMovies } from 'services/moviesApi';
import { SearchMovie } from 'components/SearchMovie/SearchMovie';
import MovieList from 'components/MovieList/MovieList';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';
  const [loading, setLoading] = useState(false);

  const updateQueryString = query => {
    const nextParams = query !== '' && { query };
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setLoading(true);
        const movies = await getSearchMovies(movieName);
        setSearchResults(movies);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [movieName]);

  return (
    <div>
      <SkeletonTheme baseColor="#0f1926" highlightColor="#cd1839">
        <SearchMovie value={movieName} onChange={updateQueryString} />
        {loading ? (
          <Skeleton
            count={15}
            style={{ height: 30, width: 300, marginTop: 15 }}
          />
        ) : searchResults.length === 0 && movieName ? (
          <h2>Nothing found</h2>
        ) : (
          <MovieList films={searchResults} />
        )}
      </SkeletonTheme>
    </div>
  );
};

export default Movies;
