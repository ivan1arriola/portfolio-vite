import { Container } from 'react-bootstrap';
import ProyectosCard from '../styledcomponents/Card/ProyectosCard';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';
import obtenerData from '../utils/obtenerData';
import { useEffect, useState } from 'react';

class Proyecto {
  name: string;
  description: string;
  image: string;
  url: string;
  has_backend: boolean;
  github: string[];
  tech: string[];
  last_update: string;

  constructor(name: string, description: string, image: string, url: string, has_backend: boolean, github: string[], tech: string[], last_update: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.url = url;
    this.has_backend = has_backend;
    this.github = github;
    this.tech = tech;
    this.last_update = last_update;
  }
}


const Proyectos = () => {
  const [proyectos, setProyectos] = useState<Proyecto[]>([]);

  useEffect(() => {
    obtenerData('projects').then((data: any) => {
      setProyectos(data.projects.map((proyecto: any) => new Proyecto(proyecto.name, proyecto.description, proyecto.image, proyecto.url, proyecto.has_backend, proyecto.github, proyecto.tech, proyecto.last_update)));
    });
  }, []);

  console.log(proyectos);

  return (
    <ContainerPagina id="projects">
      <Container>
        <Titulo>Proyectos</Titulo>
      </Container>
      <Container fluid className="d-flex flex-wrap justify-content-center">
        {proyectos.map((proyecto, index) => {
          return <ProyectosCard key={index} proyecto={proyecto} />;
        })
        
        }

      </Container>
    </ContainerPagina>
  );
};

export default Proyectos;
