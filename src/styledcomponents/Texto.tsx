import styled from "styled-components";

const Texto = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    color: ${(props) => props.theme.colors.text};
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    margin : 0.5rem 0;
`;

export default Texto;