import styled from "styled-components";
import {Link} from "react-router-dom";

export const Wrapper = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 0.25rem;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 1.5rem;
`;

export const Message = styled.p`
  margin: 1rem 0;
  font-size: 1rem;
`;

export const Details = styled.p`

`;

export const BackLink = styled(Link)`
  color: #004085;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;
