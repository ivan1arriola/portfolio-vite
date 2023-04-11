import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';



const Presentacion = () => {

    return (
        <ContainerPagina>
            <Container>
                <Titulo>HOLAA, mi nombre es Iván Arriola</Titulo>
            </Container>

        </ContainerPagina>
    );
}

export default Presentacion;