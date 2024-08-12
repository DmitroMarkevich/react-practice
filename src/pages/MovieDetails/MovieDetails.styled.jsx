import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.section`
  padding: var(--spacing-large);
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: var(--primary-color);
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: var(--text-primary);
  margin-bottom: var(--spacing-medium);
`;

export const Img = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  max-width: 100%;
`;

export const UserScore = styled.p`
  font-size: 1rem;
  margin-top: var(--spacing-small);
  color: var(--text-secondary);
`;

export const OverviewTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`;

export const Overview = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
`;

export const GenresTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`;

export const Genres = styled.p`
  font-size: 1rem;
  color: var(--text-secondary);
`;

export const AdditionalInfoTitle = styled.h3`
  font-size: 1.25rem;
  color: var(--text-primary);
  margin-top: var(--spacing-medium);
`;

export const AdditionalInfo = styled.div`
  margin-top: var(--spacing-large);
`;

export const InfoList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  gap: 16px;
  margin: 0;
`;

export const InfoLink = styled(Link)`
  font-size: 1rem;
  color: var(--primary-color);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
