import { Card, CardTitle, CardBody, CardImg } from './CardStyles';

interface Item {
  nombre: string;
  imagen: string;
}

const CardConImagen = ({ imagen, nombre }: Item) => {
  return (
    <Card className=" m-2">
      <CardImg variant="top" src={imagen} />
      <CardBody>
        <CardTitle>{nombre}</CardTitle>
      </CardBody>
    </Card>
  );
};

export default CardConImagen;
