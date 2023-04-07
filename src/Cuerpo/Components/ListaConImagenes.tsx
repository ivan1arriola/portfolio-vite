import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

interface Item {
  nombre: string;
  imagen: string;
}

interface ListaConImagenesProps {
  lista: Item[];
}

const CardConImagen = ({ imagen, nombre }: Item) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={imagen} className="imagen-lista" />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
      </Card.Body>
    </Card>
  );
};

const ListaConImagenes = ({ lista }: ListaConImagenesProps) => {
  return (
    <>
      {lista.map((item) => (
            <CardConImagen {...item} key={item.nombre} />
        ))}
    </>
        
  );
};

export default ListaConImagenes;
