import styled from "styled-components";

const Titulo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  color: ${(props) => props.theme.colors.primary};
  background-color: transparent;
  transition: all 0.2s ease-in-out;
`;

export default Titulo;
