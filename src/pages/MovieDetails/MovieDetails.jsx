import {Outlet, useLocation, useParams} from 'react-router-dom';
import {Suspense, useEffect, useRef, useState} from 'react';
import {getMovieDetails} from '../../services';
import {
  AdditionalInfo,
  AdditionalInfoTitle,
  BackLink,
  Container,
  Genres,
  GenresTitle,
  InfoList,
  Overview,
  OverviewTitle,
  Img,
  UserScore,
  Title,
  InfoLink
} from './MovieDetails.styled';
import {FaArrowLeft} from 'react-icons/fa'
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";

const MovieDetails = () => {
  const {movieId} = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  const backLinkHref = useRef(location.state?.from ?? '/react-practice/movies');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await getMovieDetails(Number(movieId));
        setMovie(response);
      } catch (error) {
        setError('Failed to load movie details');
        console.error(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (error) {
    return <Error errorDetails={error}/>;
  }

  if (!movie) {
    return <Loader/>;
  }

  const {original_title, poster_path, vote_average, overview, genres} = movie;

  return (
    <Container>
      <BackLink to={backLinkHref.current}>
        <FaArrowLeft style={{marginRight: '8px'}}/>
        Go back
      </BackLink>

      <div>
        <Title>{original_title}</Title>
        {poster_path && (
          <Img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_title}
            width="270"
          />
        )}
        <UserScore>User score: {vote_average ? (vote_average * 10).toFixed(1) : 'N/A'}%</UserScore>

        <OverviewTitle>Overview</OverviewTitle>
        <Overview>{overview || 'No overview available'}</Overview>

        <GenresTitle>Genres</GenresTitle>
        <Genres>{genres.map(genre => genre.name).join(', ')}</Genres>
      </div>

      <AdditionalInfo>
        <AdditionalInfoTitle>Additional information</AdditionalInfoTitle>
        <InfoList>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>
          <li>
            <InfoLink to="reviews">Reviews</InfoLink>
          </li>
        </InfoList>
      </AdditionalInfo>

      <Suspense fallback={<Loader/>}>
        <Outlet/>
      </Suspense>
    </Container>
  );
}

export default MovieDetails;
