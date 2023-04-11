import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from './CardStyles';

interface CardProps {
  titulo: string;
  periodo: string;
  institucion: string;
}

const EducacionCard: React.FC<CardProps> = ({ titulo, periodo, institucion }) => {
  return (
    <Card className="h-100">
      <CardBody className='p-2'>
        <CardTitle className='mt-3'>{titulo}</CardTitle>
        <CardSubtitle className="mb-2 text-muted">{periodo}</CardSubtitle>
        <CardText>{institucion}</CardText>
      </CardBody>
    </Card>

  );
};

export default EducacionCard;