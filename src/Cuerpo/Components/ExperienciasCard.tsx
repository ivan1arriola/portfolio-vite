import React from 'react';
import { Card } from 'react-bootstrap';

interface CardProps {
  titulo: string;
  periodo: string;
  texto: string;
  link: string;
}

const ExperienciaCard: React.FC<CardProps> = ({ titulo, periodo, texto, link }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{periodo}</Card.Subtitle>
        <Card.Text>{texto}</Card.Text>
        <Card.Link href={link}>Visita la pagina</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ExperienciaCard;
