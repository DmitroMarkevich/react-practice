import {Wrapper, Item, StyledLink} from "./Plants.styled";

export const PlantsList = ({plants}) => {
  return (
    <Wrapper>
      <ul>
        {plants.map(plant => (
          <Item key={plant.taxonKey}>
            <StyledLink to={`/plant/${plant.key}`}>
              {plant.vernacularName || plant.canonicalName} ({plant.scientificName})
            </StyledLink>
          </Item>
        ))}
      </ul>
    </Wrapper>
  );
};
