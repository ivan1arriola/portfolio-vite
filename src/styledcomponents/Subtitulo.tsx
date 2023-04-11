import styled from "styled-components";

const Subtitulo = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin: 0;
    color: ${(props) => props.theme.colors.primary};
    background-color: transparent;
    transition: all 0.2s ease-in-out;
`;

export default Subtitulo;