import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../styledcomponents/Card/ProyectosCard';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';

const Proyectos = () => {
  return (
    <ContainerPagina id='projects' >
      <Container>
        <Titulo>Proyectos</Titulo>
      </Container>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        <CustomCard
          titulo="Floreria Camelia"
          imagen="https://www.floreriacamelia.com/floreriaCamelia.svg"
          periodo="Actualidad"
          texto="Desarrollo de la pagina estatica de Floreria Camelia"
          link="https://www.floreriacamelia.com"
        />
        <CustomCard
          titulo='Floreria Camelia - Admin'
          periodo='Actualidad'
          texto='Desarrollo de la pagina dedicada a la administracion de la pagina de Floreria Camelia'
          link='https://admin.floreriacamelia.com'
        />
        <CustomCard
          titulo="Proyecto JAP"
          imagen="https://ivan1arriola.github.io/ProyectoJAP/img/login.png"
          periodo="2022"
          texto="Proyecto de Desarrollo Web del curso de Jovenes a Programar - CEIBAL"
          link="https://ivan1arriola.github.io/ProyectoJAP/"
        />
      </Container>
    </ContainerPagina>
  );
};

export default Proyectos;
