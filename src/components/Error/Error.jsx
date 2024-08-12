import PropTypes from "prop-types";
import {Wrapper, Title, Message, BackLink} from './Error.styled';

const Error = ({title, message, linkText, linkUrl, errorDetails}) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Message>{message}</Message>
      {errorDetails && <Message>Details: {errorDetails}</Message>}
      <BackLink to={linkUrl}>{linkText}</BackLink>
    </Wrapper>
  );
};

Error.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  errorDetails: PropTypes.string,
};

Error.defaultProps = {
  title: 'An error occurred',
  message: 'Something went wrong. Please try again later.',
  linkText: 'Go back',
  linkUrl: '/',
  errorDetails: null,
};

export default Error;
