import PropTypes from "prop-types";
import {Character, Img, ListItem, Name, Wrapper, List} from "./CastsList.styled";

const CastsList = ({casts}) => {
  return (
    <Wrapper>
      <List>
        {casts.map(({id, profile_path, name, character}) => (
          <ListItem key={id}>
            <Img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={`${name} photo`}
              width='70'
            />
            <div>
              <Name>{name}</Name>
              <Character>Character: {character}</Character>
            </div>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

CastsList.propTypes = {
  casts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    profile_path: PropTypes.string,
    name: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
  })).isRequired,
};

export default CastsList;
