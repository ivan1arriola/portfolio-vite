import Container from "react-bootstrap/Container";
import styled from "styled-components";

const ContainerPagina = styled(Container)`
    width: fit-content;
    height: fit-content;
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    text-align: center;
`;

export default ContainerPagina;
