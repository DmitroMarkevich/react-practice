import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {getPlantDetails} from '../../services';
import {Container, Paragraph, Strong, Title} from "./PlantDetails.styled";
import {FaArrowLeft} from "react-icons/fa";

const PlantDetails = () => {
  const {plantId} = useParams();
  const [plant, setPlant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getPlantDetails(`${plantId}`)
      .then((data) => {
        setPlant(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [plantId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading plant details: {error.message}</p>;

  return (
    <Container>
      <Link to="/" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', textDecoration: 'none', color: 'black' }}>
        <FaArrowLeft style={{ marginRight: '8px' }} />
        Return Home
      </Link>
      <Title>{plant.vernacularName || plant.scientificName}</Title>
      <Paragraph><Strong>Scientific Name:</Strong> {plant.scientificName}</Paragraph>
      <Paragraph><Strong>Kingdom:</Strong> {plant.kingdom}</Paragraph>
      <Paragraph><Strong>Phylum:</Strong> {plant.phylum}</Paragraph>
      <Paragraph><Strong>Class:</Strong> {plant.class}</Paragraph>
      <Paragraph><Strong>Order:</Strong> {plant.order}</Paragraph>
      <Paragraph><Strong>Family:</Strong> {plant.family}</Paragraph>
      <Paragraph><Strong>Genus:</Strong> {plant.genus}</Paragraph>
      <Paragraph><Strong>Species:</Strong> {plant.species}</Paragraph>
      <Paragraph><Strong>Taxonomic Status:</Strong> {plant.taxonomicStatus}</Paragraph>
      <Paragraph><Strong>Authorship:</Strong> {plant.authorship}</Paragraph>
    </Container>
  );
};

export default PlantDetails;
