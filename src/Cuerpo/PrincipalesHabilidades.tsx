import React from 'react';
import { Container } from 'react-bootstrap';

const PrincipalesHabilidades = () => {
    return (
        <Container>
            <h1>Principales Habilidades</h1>
            <div>
                <div >
                    <h2>Desarrollo Web</h2>
                    <div className='desarrolloweb'>
                        <div >
                            <h2>Frontend</h2>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>Bootstrap</li>
                            </ul>
                        </div>
                        <div>
                            <h2>Backend</h2>
                            <ul>
                                <li>NodeJS</li>
                                <li>Express</li>
                                <li>MySQL</li>
                            </ul>
                        </div>

                    </div>
                </div>


                <h2>Desarrollo de Software</h2>
                <ul>
                    <li>Java</li>
                    <li>C++</li>
                    <li>SQL</li>
                </ul>

            </div>
        </Container>
    );
}

export default PrincipalesHabilidades;