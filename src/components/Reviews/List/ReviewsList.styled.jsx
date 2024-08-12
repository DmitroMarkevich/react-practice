import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const List = styled.ul`
  list-style-type: circle;
  padding: 0;
`;

export const ListItem = styled.li`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ddd;
`;

export const Name = styled.h3`
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
`;

export const Content = styled.p`
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  color: var(--text-secondary);
`;
