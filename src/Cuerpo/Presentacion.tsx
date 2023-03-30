import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import selfie from "../assets/selfie.png";



const Presentacion = () => {
    
    return (
        <Container>
            <Row>
                <h1>Presentacion</h1>
            </Row>

            <Row>
                <Col>
                    <img id='selfie' src={selfie} alt='selfie' className='img-fluid'/>
                </Col>
                <Col >
                    <p>
                        Soy una persona apasionada por el desarrollo de software, me gusta aprender cosas nuevas y disfruto ponerme a prueba con nuevos retos.
                        Mi nombre es Ivan Arriola, soy uruguayo y tengo 23 años. Actualmente estoy cursando la carrera de Ingenieria en Computacion en la Universidad
                        de la Republica, en Montevideo, Uruguay. Me considero una persona responsable, proactiva y con ganas de aprender. Me gusta trabajar en equipo
                        y me adapto facilmente a los cambios.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Presentacion;