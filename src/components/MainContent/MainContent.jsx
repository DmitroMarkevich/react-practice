import React from 'react';
import img from "../../images/main-content-plant.jpg";
import img_chamomile from "../../images/chamomile.webp";
import img_wormwood from "../../images/wormwood.jfif";
import img_lavender from "../../images/lavender.jpg";
import img_meadowsweet from "../../images/meadowsweet.webp";

import {
  FeatureCard, FeatureDescription, FeatureIcon,
  FeaturesWrapper, FeatureTitle, HerbDescription, HerbImage, HerbItem, HerbsList, HerbTitle,
  Image,
  ImageContent,
  MainContentWrapper,
  Paragraph, SectionDescription, SectionHeader,
  SectionWrapper,
  TextContent,
  Title
} from "./MainContent.styled";

const herbImages = {
  chamomile: "../../images/chamomile.jpg",
  // wormwood: "path/to/wormwood.jpg",
  // meadowsweet: "path/to/meadowsweet.jpg",
  // lavender: "path/to/lavender.jpg",
};

const MainContent = () => {
  return (
    <>
      <MainContentWrapper>
        <TextContent>
          <Title>Discover the Richness of Ukraine's Plants</Title>
          <Paragraph>
            The plants of Ukraine are not just flora; they are a symbol of the country's nature and history. Discover unique
            plant species, their significance, and their uses in medicine and folk rituals. Each region has its own
            characteristics of flora, adding diversity and beauty to the nature of our country.
          </Paragraph>
        </TextContent>
        <ImageContent>
          <Image src={img} alt="Plants of Ukraine" />
        </ImageContent>
      </MainContentWrapper>
      <SectionWrapper>
        <SectionHeader>History and Nature in Harmony</SectionHeader>
        <SectionDescription>
          Explore the wealth of Ukrainian nature and heritage. Discover unique plants that have played an important role
          in the formation of our culture and natural resources.
        </SectionDescription>
        <FeaturesWrapper>
          <FeatureCard>
            <FeatureIcon>🌿</FeatureIcon>
            <FeatureTitle>Flora Richness</FeatureTitle>
            <FeatureDescription>
              Ukraine is famous for the diversity of its plants, from steppe grasses to forest expanses.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🏞️</FeatureIcon>
            <FeatureTitle>Unique Landscapes</FeatureTitle>
            <FeatureDescription>
              Each region of the country is marked by its natural beauty and the richness of its ecosystems.
            </FeatureDescription>
          </FeatureCard>
          <FeatureCard>
            <FeatureIcon>🌻</FeatureIcon>
            <FeatureTitle>Cultural Symbols</FeatureTitle>
            <FeatureDescription>
              Some plants have become national symbols and are widely used in rituals.
            </FeatureDescription>
          </FeatureCard>
        </FeaturesWrapper>
      </SectionWrapper>
      <HerbsList>
        <HerbItem>
          <HerbImage src={img_chamomile} alt="Chamomile" />
          <HerbTitle>🌼 Chamomile (Ромашка)</HerbTitle>
          <HerbDescription>Known for its calming properties and used in herbal teas.</HerbDescription>
        </HerbItem>
        <HerbItem>
          <HerbImage src={img_wormwood} alt="Wormwood" />
          <HerbTitle>🌾 Wormwood (Полин)</HerbTitle>
          <HerbDescription>A traditional herb with a strong aroma, often used in folk medicine.</HerbDescription>
        </HerbItem>
        <HerbItem>
          <HerbImage src={img_meadowsweet} alt="Meadowsweet" />
          <HerbTitle>🌳 Meadowsweet (Таволга)</HerbTitle>
          <HerbDescription>Often found in wetlands, used for its medicinal properties.</HerbDescription>
        </HerbItem>
        <HerbItem>
          <HerbImage src={img_lavender} alt="Lavender" />
          <HerbTitle>🌸 Lavender (Лаванда)</HerbTitle>
          <HerbDescription>Valued for its fragrance and calming effects, used in various cultural rituals.</HerbDescription>
        </HerbItem>
      </HerbsList>
    </>
  );
}

export default MainContent;
