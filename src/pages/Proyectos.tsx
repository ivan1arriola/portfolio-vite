import { Container} from 'react-bootstrap';
import CustomCard from '../styledcomponents/Card/ProyectosCard';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';
import obtenerData from '../utils/obtenerData';
import { useEffect, useState } from 'react';

const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    obtenerData('projects').then((data: any) => {
      setProyectos(data.projects);
    });
  }, []);

  console.log(proyectos);

  return (
    <ContainerPagina id='projects' >
      <Container>
        <Titulo>Proyectos</Titulo>
      </Container>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        {proyectos.map(({name, image, last_update, description, url, github, tech} )=> (
          <CustomCard
            key={name}
            titulo={name}
            imagen={image}
            last_update={last_update}
            texto={description}
            link={url}
            github={github}
            tech={tech}
          />
        ))}
      </Container>
    </ContainerPagina>
  );
};

export default Proyectos;