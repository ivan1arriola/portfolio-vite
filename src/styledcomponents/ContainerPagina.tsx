import styled from 'styled-components';


const ContainerPagina = styled.div`
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.primary};
    transition: all 0.2s ease-in-out;
    text-align: center;
    padding: 1.5rem;
    border-radius: 30px;
    margin: auto;
    box-shadow: ${(props) => props.theme.shadows.box};
    width: 90%;
`;



export default ContainerPagina;
