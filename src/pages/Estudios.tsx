import { Container, Row, Col } from 'react-bootstrap';
import CostumeCardTwo from '../styledcomponents/Card/EducacionCard';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';


const Estudios = () => {
    return (
        <ContainerPagina>
            <Container>
                <Titulo>Estudios</Titulo>
            </Container>
            <Container fluid className="d-flex flex-wrap justify-content-center">
                <CostumeCardTwo
                    institucion="Universidad de la Republica"
                    periodo="2021 - Actualidad"
                    titulo="Ingenieria en Computacion"
                />
                <CostumeCardTwo
                    institucion="Ceibal - Jovenes a Programar"
                    periodo="Marzo 2022 - Diciembre 2022"
                    titulo="Desarrollador Web"
                />
            </Container>
        </ContainerPagina>
    );
}

export default Estudios;