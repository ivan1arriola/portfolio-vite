import React from 'react';
import { Card } from 'react-bootstrap';

interface CardProps {
  titulo: string;
  periodo: string;
  institucion: string;
}

const EducacionCard: React.FC<CardProps> = ({ titulo, periodo, institucion }) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{periodo}</Card.Subtitle>
        <Card.Text>{institucion}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default EducacionCard;
