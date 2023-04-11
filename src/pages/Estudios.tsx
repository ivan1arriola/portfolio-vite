import { Container, Row, Col} from 'react-bootstrap';
import CostumeCardTwo from '../styledcomponents/Card/EducacionCard';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';


const Estudios = () => {
    return (
        <ContainerPagina>
            <Container>
                <Titulo>Estudios</Titulo>
            </Container>
            <Row>
                <Col>
                    <CostumeCardTwo
                        institucion="Universidad de la Republica"
                        periodo="2021 - Actualidad"
                        titulo="Ingenieria en Computacion"
                    />
                </Col>

                <Col>
                    <CostumeCardTwo
                        institucion="Ceibal - Jovenes a Programar"
                        periodo="Marzo 2022 - Diciembre 2022"
                        titulo="Desarrollador Web"
                    />
                </Col>
            </Row>
        </ContainerPagina>
    );
}

export default Estudios;