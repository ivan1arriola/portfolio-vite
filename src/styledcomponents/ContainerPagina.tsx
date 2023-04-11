import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';

const animation = keyframes`${bounceInUp}`;

const ContainerPagina = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    text-align: center;
    padding-bottom: 1rem;
    border-radius: 30px;
    margin: auto;
    margin-top: 30px;
    margin-bottom:10px;
    overflow: hidden;
    animation: 1.5s ${animation};
    @media (min-width: 768px) {
        width: 90%;
    }
    @media (min-width: 1024px) {
        width: 80%;
    }
`;

console.log('ContainerPagina');



export default ContainerPagina;
