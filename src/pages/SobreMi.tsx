import { FC } from "react";
import styled from "styled-components";
import Texto from "../styledcomponents/Texto";
import Foto from "../styledcomponents/Foto";
import ContainerPagina from "../styledcomponents/ContainerPagina";
import obtenerData from "../utils/obtenerData";
import { useState } from "react";

const SobreMi: FC = () => {
  const [descripcion, setDescripcion] = useState("");

  obtenerData("about").then((data) => {
    setDescripcion(data.about);
  });




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
            {descripcion}
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
