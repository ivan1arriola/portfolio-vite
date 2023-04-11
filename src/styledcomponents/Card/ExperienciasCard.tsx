import React from 'react';
import {Card, CardBody, CardLink, CardSubtitle, CardText, CardTitle } from './CardStyles';

interface CardProps {
  titulo: string;
  periodo: string;
  texto: string;
  link: string;
}

const ExperienciaCard: React.FC<CardProps> = ({ titulo, periodo, texto, link }) => {
  return (
    <Card className="h-100">
      <CardBody className='p-2'>
        <CardTitle className='mt-3'>{titulo}</CardTitle>
        <CardSubtitle className="mb-2 text-muted">{periodo}</CardSubtitle>
        <CardText>{texto}</CardText>
        <CardLink href={link}>Visita la pagina</CardLink>
      </CardBody>
    </Card>
  );
};

export default ExperienciaCard;