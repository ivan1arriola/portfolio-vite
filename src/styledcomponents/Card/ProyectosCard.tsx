import React from 'react';
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle, CardImg } from './CardStyles';
import styled from 'styled-components';

interface CardProps {
  titulo: string;
  periodo: string;
  texto: string;
  link: string;
  imagen?: string;
}

const StyledCard = styled(Card)`
  max-width: 400px !important;
  min-width: 13rem !important;
`;

const ProyectosCard: React.FC<CardProps> = ({ titulo, periodo, texto, link, imagen}) => {
  return (
    <StyledCard className="h-100">
      {imagen && <CardImg src={imagen}  />}
      <CardBody className='p-2'>
        <CardTitle className='mt-3'>{titulo}</CardTitle>
        <CardSubtitle className="mb-2 text-muted">{periodo}</CardSubtitle>
        <CardText>{texto}</CardText>
        <CardLink href={link}>Visita la pagina</CardLink>
      </CardBody>
    </StyledCard>
  );
};

export default ProyectosCard;