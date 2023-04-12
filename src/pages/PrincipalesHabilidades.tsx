import Subtitulo from "../styledcomponents/Subtitulo";
import Titulo from "../styledcomponents/Titulo";
import { Container, Row, Col } from "react-bootstrap";
import ListaConImagenes from "../components/ListaConImagenes";
import ContainerPagina from "../styledcomponents/ContainerPagina";

const skills = [
  { nombre: "JavaScript", imagen: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' },
  { nombre: "C++", imagen: "https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png" },
  //{ nombre: "Java", imagen: "https://logoeps.com/wp-content/uploads/2013/03/java-eps-vector-logo.png" },
  //{ nombre: "R", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/R_logo.svg/1920px-R_logo.svg.png" },
  //{ nombre: "Python", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" }
];

const frontendSkills = [
  { nombre: "React", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1920px-React.svg.png" },
  { nombre: "Bootstrap", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1920px-Bootstrap_logo.svg.png" },
  { nombre: "HTML", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1280px-HTML5_logo_and_wordmark.svg.png" },
  { nombre: "CSS", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1024px-CSS3_logo_and_wordmark.svg.png" }
];

const backendSkills = [
  { nombre: "NodeJS", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" },
  { nombre: "Express", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Expressjs.png/180px-Expressjs.png" },
  { nombre: "MongoDB", imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/375px-MongoDB_Logo.svg.png" }
];

const PrincipalesHabilidades = () => (
  <ContainerPagina>
    <Titulo className="text-center">Principales Habilidades</Titulo>

    <Subtitulo>Lenguajes</Subtitulo>
    <Container className="d-flex flex-wrap justify-content-center">
      <ListaConImagenes lista={skills} />
    </Container>

    <Subtitulo className="text-center">Frontend</Subtitulo>
    <Container className="d-flex flex-wrap justify-content-center">
      <ListaConImagenes lista={frontendSkills} />
    </Container>

    <Subtitulo className="text-center">Backend</Subtitulo>
    <Container className="d-flex flex-wrap justify-content-center">
      <ListaConImagenes lista={backendSkills} />
    </Container>
  </ContainerPagina>
);

export default PrincipalesHabilidades;
