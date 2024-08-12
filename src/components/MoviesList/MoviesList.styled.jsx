import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  padding: 1rem;
`;

export const Item = styled.li`
  margin-bottom: 0.5rem;
  list-style-type: circle;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;
