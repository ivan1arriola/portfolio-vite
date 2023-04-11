import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';

const animation = keyframes`${bounceInUp}`;

const ContainerPagina = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    text-align: center;
    padding: 10px;
    border-radius: 30px;
    border-color: ${(props) => props.theme.colors.borderColor};
    border-style: solid;
    margin: auto;
    margin-top: 30px;
    margin-bottom: 10px;
    overflow: hidden;
    
    animation: 1.5s ${animation};

    box-shadow: ${(props) => props.theme.shadows.box};
    
    /* media query para reducir el ancho en pantallas grandes */
    @media (min-width: 768px) {
        max-width: 800px;
        width: 80%;
    }
`;



export default ContainerPagina;
