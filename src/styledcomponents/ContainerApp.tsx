import styled from "styled-components";

const ContainerApp = styled.div `
    background-color: ${(props) => props.theme.colors.pageBackground};
    background-image: url("/fondo.svg")
    
`;

export default ContainerApp;