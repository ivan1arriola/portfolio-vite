import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Lista from "./Components/Lista";

const PrincipalesHabilidades = () => {
    const lenguajes = ["JavaScript", "C++", "Java", "R", "Python"];
    const frontend = ["React", "Bootstrap", "HTML", "CSS"];
    const backend = ["NodeJS", "Express", "MongoDB"];

    return (
        <Container>
            <h1>Principales habilidades</h1>
            <Row>
                <Col>
                    <h2>Desarrollo Web</h2>
                    <Row>
                        <Col>
                            <h3>Frontend</h3>
                            <Lista items={frontend} />
                        </Col>
                        <Col>
                            <h3>Backend</h3>
                            <Lista items={backend} />
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <h2>Lenguajes de programación</h2>
                    <Lista items={lenguajes} />
                </Col>
            </Row >
        </Container >
    );
};

export default PrincipalesHabilidades;
