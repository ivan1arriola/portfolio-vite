import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListaConImagenes from "../components/ListaConImagenes";

const skills = [
  { nombre: "JavaScript", imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { nombre: "C++", imagen: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" },
  { nombre: "Java", imagen: "https://logoeps.com/wp-content/uploads/2013/03/java-eps-vector-logo.png" },
  { nombre: "R", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1920px-R_logo.svg.png" },
  // { nombre: "Python", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" }
];

const frontendSkills = [
  { nombre: "React", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1920px-React.svg.png" },
  { nombre: "Bootstrap", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1920px-Bootstrap_logo.svg.png" },
  { nombre: "HTML", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png" },
  { nombre: "CSS", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1024px-CSS3_logo_and_wordmark.svg.png" }
];

const backendSkills = [
  { nombre: "NodeJS", imagen: "https://www.startechup.com/wp-content/uploads/January-11-2021-Nodejs-What-it-is-used-for-and-when-where-to-use-it-for-your-enterprise-app-development.jpg" },
  { nombre: "Express", imagen: "data:image/png;base64,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" },
  { nombre: "MongoDB", imagen: "https://1000marcas.net/wp-content/uploads/2021/06/MongoDB-Logo.jpg" }
];

const PrincipalesHabilidades = () => (
  <Container>
    <Row className="justify-content-center">
      <h1 className="text-center">Principales Habilidades</h1>
    </Row>
    <Row className="flex-wrap m-5 -5 justify-content-center">
      <h2>Lenguajes</h2>
      <Container className="d-flex flex-wrap justify-content-center">
        <ListaConImagenes lista={skills} />
      </Container>
    </Row>
    <Row className="mt-5 p-5">
      <Col lg={6}>
        <h2 className="text-center">Frontend</h2>
        <Container className="d-flex flex-wrap justify-content-center">
          <ListaConImagenes lista={frontendSkills} />
        </Container>
      </Col>
      <Col lg={6}>
        <h2 className="text-center">Backend</h2>
        <Container className="d-flex flex-wrap justify-content-center">
          <ListaConImagenes lista={backendSkills} />
        </Container>
      </Col>
    </Row>
  </Container>
);


export default PrincipalesHabilidades;
