import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from '../styledcomponents/Card/ExperienciasCard';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';

const Proyectos = () => {
  return (
    <ContainerPagina id='projects' >
      <Container>
        <Titulo>Proyectos</Titulo>
      </Container>
      <Row>
        
        <Col>
          <CustomCard
            titulo="Floreria Camelia"
            periodo="Actualidad"
            texto="Desarrollo de la pagina estatica de Floreria Camelia"
            link="https://www.floreriacamelia.com"
          />
        </Col>

        <Col>
        <CustomCard
            titulo='Floreria Camelia - Admin'
            periodo='Actualidad'
            texto='Desarrollo de la pagina dedicada a la administracion de la pagina de Floreria Camelia'
            link='https://admin.floreriacamelia.com'
          />
        </Col>

        <Col>
          <CustomCard
            titulo="Proyecto JAP"
            periodo="2022"
            texto="Proyecto de Desarrollo Web del curso de Jovenes a Programar - CEIBAL"
            link="https://ivan1arriola.github.io/ProyectoJAP/"
          />
        </Col>
      </Row>
    </ContainerPagina>
  );
};

export default Proyectos;
