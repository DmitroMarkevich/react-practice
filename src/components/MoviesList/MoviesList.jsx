import PropTypes from "prop-types";
import {Wrapper, Item, StyledLink} from "./MoviesList.styled";
import {useLocation} from "react-router-dom";

export const MoviesList = ({movies}) => {
  const location = useLocation();

  return (
    <Wrapper>
      <ul>
        {movies.map(movie => (
          <Item key={movie.id}>
            <StyledLink to={`/movies/${movie.id}`} state={{from: location}}>{movie.title}</StyledLink>
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
