import { FC } from "react";
import styled from "styled-components";
import Texto from "../styledcomponents/Texto";
import Foto from "../styledcomponents/Foto";
import ContainerPagina from "../styledcomponents/ContainerPagina";

const SobreMi: FC = () => {
  /* Actualiza la edad automáticamente */
  const hoy: Date = new Date();
  const cumpleanos: Date = new Date(2000, 2, 1);
  let edad: number = hoy.getFullYear() - cumpleanos.getFullYear();
  const m: number = hoy.getMonth() - cumpleanos.getMonth();

  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  // ------

  return (
    <ContainerPagina id="about">
      <FlexCentered>
        <div>
          <Foto src={"https://raw.githubusercontent.com/ivan1arriola/portfolio/main/src/assets/selfie.png"} alt="Selfie" />
        </div>
        <div>
          <Texto >
            Soy un estudiante de Ingeniería en Computación y desarrollador web autodidacta de Montevideo, Uruguay, con {edad} años de edad.
            Tengo conocimientos en HTML, CSS, JavaScript, y he desarrollado aplicaciones web de una sola página utilizando React. Además, tengo experiencia en programación orientada a objetos con C++ y he construido API REST con ExpressJS.
          </Texto>
          <Texto>
            Me considero una persona responsable, proactiva y apasionada por la tecnología y la programación. Disfruto desafiarme a mí mismo para mejorar mis habilidades y enfrentar nuevos retos. También me interesa la música, la estadística y las matemáticas.
          </Texto>
        </div>
      </FlexCentered>
    </ContainerPagina>
  );
};

export default SobreMi;

const FlexCentered = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
