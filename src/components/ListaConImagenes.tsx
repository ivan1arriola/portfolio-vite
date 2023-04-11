import CardConImagen from "../styledcomponents/Card/CardConImagen";

interface Item {
  nombre: string;
  imagen: string;
}

interface ListaConImagenesProps {
  lista: Item[];
}


const ListaConImagenes = ({ lista }: ListaConImagenesProps) => {
  return (
    <>
      {lista.map((item) => (
            <CardConImagen {...item} key={item.nombre}/>
        ))}
    </>
        
  );
};

export default ListaConImagenes;
