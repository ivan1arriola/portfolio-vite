import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CustomCard from './Components/ExperienciasCard';

const Experiencias = () => {
  return (
    <Container>
      <Row>
        <h1>Experiencias</h1>
      </Row>
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
            titulo="Proyecto JAP"
            periodo="2022"
            texto="Proyecto de Desarrollo Web del curso de Jovenes a Programar - CEIBAL"
            link="https://ivan1arriola.github.io/ProyectoJAP/"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Experiencias;
