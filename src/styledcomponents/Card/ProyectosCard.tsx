import React from 'react';
import { Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, CardImg } from './CardStyles';
import styled from 'styled-components';

interface CardProps {
  proyecto: {
    name: string;
    last_update: string;
    description: string;
    url: string[];
    image?: string;
    github?: string[];
    tech?: string[];
    has_backend?: boolean;
  };
}

const StyledCard = styled(Card)`
  max-width: 400px !important;
  min-width: 13rem !important;
`;


const ProyectosCard: React.FC<CardProps> = ({ proyecto }) => {
  const { name, last_update, description, url, image, github, tech, has_backend } = proyecto;

  return (
    <StyledCard className="h-100">
      {image && <CardImg src={image} />}
      <CardBody className='p-2'>
        <CardTitle className='mt-3'>{name}</CardTitle>
        {last_update && <CardSubtitle className="mb-2 text-muted">Ultima Actualización: {last_update}</CardSubtitle>}
        {description && <CardText>{description}</CardText>}
        <CardLink href={url[0]}>Visita la pagina</CardLink>
        {has_backend && <CardLink href={url[1]}>API Link</CardLink>}
        {github && <CardLink href={github[0]}>Repositorio en Github   </CardLink>}
        {has_backend && github && <CardLink href={github[1]}>Repositorio en Github de API</CardLink>}
        {tech && <CardText>Tecnologías utilizadas: {tech.join(', ')}</CardText>}
      </CardBody>
    </StyledCard>
  );
};

export default ProyectosCard;