import { Container, Row, Col} from 'react-bootstrap';
import CostumeCardTwo from './Components/EducacionCard';

const Estudios = () => {
    return (
        <Container>
            <Row>
                <h1>Estudios</h1>
            </Row>
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
        </Container>
    );
}

export default Estudios;