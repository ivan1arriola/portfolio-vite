import React from 'react';
import { Container } from 'react-bootstrap';

const Presentacion = () => {
    const selfie = require('./imagenes/selfie.jpg');
    return (
        <Container>
            <div>
                <h1>Presentacion</h1>
            </div>
            <div className='presentacion'>
                <div>
                    <p>
                        Soy una persona apasionada por el desarrollo de software, me gusta aprender cosas nuevas y disfruto ponerme a prueba con nuevos retos.
                        Mi nombre es Ivan Arriola, soy uruguayo y tengo 23 años. Actualmente estoy cursando la carrera de Ingenieria en Computacion en la Universidad
                        de la Republica, en Montevideo, Uruguay. Me considero una persona responsable, proactiva y con ganas de aprender. Me gusta trabajar en equipo
                        y me adapto facilmente a los cambios.
                    </p>
                </div>

                <div>
                    <img src={selfie} alt='selfie' />
                </div>
            </div>
        </Container>
    );
}

export default Presentacion;