import React, {useState, useEffect, useRef} from 'react';
import {Pagination} from 'antd';
import {getMovies} from '../services';
import {SearchBox} from '../components/SearchBox/SearchBox';
import {MoviesList} from '../components/MoviesList/MoviesList';
import {useSearchParams} from "react-router-dom";
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";

const MOVIES_PER_PAGE = 20;

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const prevFilmNameRef = useRef('');
  const prevPageRef = useRef(1);

  const filmName = searchParams.get('query') || '';

  useEffect(() => {
    if (filmName === prevFilmNameRef.current && page === prevPageRef.current) {
      return;
    }

    prevFilmNameRef.current = filmName;
    prevPageRef.current = page;

    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await getMovies(filmName, page);
        setMovies(response.results);
        setTotalPages(response.total_pages);
      } catch (err) {
        setError('Failed to fetch movies. Please try again later.');
        console.error("Error fetching movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [filmName, page]);

  const handleSearchSubmit = (value) => {
    if (value !== prevFilmNameRef.current) {
      setSearchParams({query: value});
      setPage(1);
      setMovies([]);
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  if (error) {
    return <Error errorDetails={error}/>;
  }

  return (
    <div>
      {loading && <Loader/>}
      <SearchBox onSubmit={handleSearchSubmit}/>
      <MoviesList movies={movies}/>
      {filmName && movies.length > 0 && (
        <Pagination
          current={page}
          pageSize={MOVIES_PER_PAGE}
          total={totalPages * MOVIES_PER_PAGE}
          onChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default Movies;
