import {styled} from "styled-components";

export const MainContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 50px 0;
  padding: 0 20px;
`;

export const TextContent = styled.div`
  max-width: 50%;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: #4a752c;
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  color: #333;
  line-height: 1.6;
`;

export const ImageContent = styled.div`
  max-width: 40%;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 350px;
  border-radius: 8px;
  margin-bottom: 10px
`;

export const SectionWrapper = styled.div`
  text-align: center;
  background-color: #f8f8f4;
  padding: 60px 20px;
`;

export const SectionHeader = styled.h2`
  font-size: 2.8rem;
  color: #3d552f;
`;

export const SectionDescription = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #555;
`;

export const FeaturesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

export const FeatureCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 250px;
  text-align: center;
`;

export const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #3d552f;
`;

export const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const HerbsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HerbItem = styled.li`
  background-color: #fefefe;
  border: 1px solid #e1e1e1;
  border-radius: 8px;
  padding: 20px;
  margin: 15px 0;
  width: 80%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const HerbTitle = styled.h2`
  font-size: 2rem;
  color: #4a752c;
  margin-bottom: 10px;
`;

export const HerbDescription = styled.p`
  font-size: 1.1rem;
  color: #555;
  line-height: 1.5;
`;

export const HerbImage = styled.img`
  width: 100%;
  max-width: 150px;
  border-radius: 8px;
  margin-bottom: 10px
`;
