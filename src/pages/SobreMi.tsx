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
            Soy de Montevideo, Uruguay y tengo {edad} años.
            Estudio Ingeniería en Computación en la FING, UdelaR.
            También soy egresado de Jóvenes a Programar (Ceibal) de su edición Desarrollo Web 2022
          </Texto>
          <Texto>
            Soy una persona aficionada a la tecnología y a la programación.
            Me considero una persona responsable, proactiva y autodidacta.
            De vez en cuando disfruto ponerme a prueba con nuevos retos.
            Tambien me gusta la música, la estadistica y la matemática.
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

