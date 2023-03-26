import React from 'react';
import { Container } from 'react-bootstrap';

// Components
import Estudios from './Cuerpo/Estudios';
import Experiencias from './Cuerpo/Experiencias';
import Presentacion from './Cuerpo/Presentacion';
import PrincipalesHabilidades from './Cuerpo/PrincipalesHabilidades';

const Cuerpo = () => {
    return (
        <Container >
            <Presentacion/>
            <PrincipalesHabilidades/>
            <Estudios/>
            <Experiencias/>
        </Container>
    );
}

export default Cuerpo;