import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListaConImagenes from "./Components/ListaConImagenes";

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
  { nombre: "NodeJS", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1920px-Node.js_logo.svg.png" },
  { nombre: "Express", imagen: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
  { nombre: "MongoDB", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" }
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
