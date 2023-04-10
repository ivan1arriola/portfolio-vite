import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import selfie from "../assets/selfie.png";



const Presentacion = () => {

    return (
        <Container>
            <Container>
                <h1>Holaa, mi nombre es Iván Arriola</h1>
            </Container>

            <Container>
                <p>
                    Soy una persona aficionada a la tecnología y a la programación.
                    Me considero una persona responsable, proactiva y autodidacta.
                    De vez en cuando disfruto ponerme a prueba con nuevos retos.
                    Tambien me gusta la música, la estadistica y la matemática.
                </p>
            </Container>

        </Container>
    );
}

export default Presentacion;