import PropTypes from "prop-types";
import {List, ListItem, Wrapper, Name, Content} from "./ReviewsList.styled";

const ReviewsList = ({reviews}) => {
  function stripHtmlTags(html) {
    return html.replace(/<[^>]*>/g, '');
  }

  return (
    <Wrapper>
      <List>
        {reviews.map(({id, author, content}) => (
          <ListItem key={id}>
            <Name>Author: {author}</Name>
            <Content>{stripHtmlTags(content)}</Content>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;
