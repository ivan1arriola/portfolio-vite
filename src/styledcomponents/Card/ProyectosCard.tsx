import React from 'react';
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, CardImg } from './CardStyles';
import styled from 'styled-components';

interface CardProps {
  titulo: string;
  last_update: string;
  texto: string;
  link: string;
  imagen?: string;
  github?: string;
  tech?: string[];
}

const StyledCard = styled(Card)`
  max-width: 400px !important;
  min-width: 13rem !important;
`;

const ProyectosCard: React.FC<CardProps> = ({ titulo, last_update, texto, link, imagen, github, tech}) => {
  return (
    <StyledCard className="h-100">
      {imagen && <CardImg src={imagen}  />}
      <CardBody className='p-2'>
        <CardTitle className='mt-3'>{titulo}</CardTitle>
        {last_update && <CardSubtitle className="mb-2 text-muted">Ultima Actualización: {last_update}</CardSubtitle>}
        {texto && <CardText>{texto}</CardText>}
        <CardLink href={link}>Visita la pagina</CardLink>
        {github && <CardLink href={github}>Repositorio en Github</CardLink>}
        {tech && <CardText>Tecnologías utilizadas: {tech.join(', ')}</CardText>}
      </CardBody>
    </StyledCard>
  );
};

export default ProyectosCard;
