import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 15px;
`;

export const Img = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;

export const Name = styled.p`
  margin: 0;
  font-weight: 700;
  color: var(--text-primary);
`;

export const Character = styled.p`
  margin: 0;
  color: #555;
`;
