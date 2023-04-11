import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Titulo from '../styledcomponents/Titulo';
import Texto from '../styledcomponents/Texto';
import ContainerPagina from '../styledcomponents/ContainerPagina';



const Presentacion = () => {

    return (
        <ContainerPagina>
            <Container>
                <Titulo>Holaa, mi nombre es Iván Arriola</Titulo>
            </Container>

            <Container>
                <Texto>
                    Soy una persona aficionada a la tecnología y a la programación.
                    Me considero una persona responsable, proactiva y autodidacta.
                    De vez en cuando disfruto ponerme a prueba con nuevos retos.
                    Tambien me gusta la música, la estadistica y la matemática.
                </Texto>
            </Container>

        </ContainerPagina>
    );
}

export default Presentacion;