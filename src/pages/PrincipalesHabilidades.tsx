import Titulo from "../styledcomponents/Titulo";
import { Container } from "react-bootstrap";
import ListaConImagenes from "../components/ListaConImagenes";
import ContainerPagina from "../styledcomponents/ContainerPagina";
import { useState } from "react";
import obtenerData from "../utils/obtenerData";




const PrincipalesHabilidades = () => {
  const [skills, setSkills] = useState([]);

  obtenerData("skills").then((data: any) => {
    setSkills(data.skills);
  });


  return (
    <ContainerPagina>
      <Titulo className="text-center">Principales Habilidades</Titulo>
      <Container className="d-flex flex-wrap justify-content-center">
        <ListaConImagenes lista={skills} />
      </Container>

    </ContainerPagina>
  );
};

export default PrincipalesHabilidades;
