import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

export const HeaderContainer = styled(Navbar) `
  background-color: ${(props) => props.theme.colors.navbar.background};
  color: ${(props) => props.theme.colors.navbar.text};
  padding: 20px;
  margin: 10px;
  border-radius: 100px;
  justify-content: space-between;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 105px;
  box-shadow: ${(props) => props.theme.shadows.box};
  width: min(90%, 1000px);
`;

export const HeaderBrand = styled.a`
  font-size: 24px;
  color: ${(props) => props.theme.colors.navbar.text};
`;

export const HeaderLink = styled.a`
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: ${(props) => props.theme.colors.navbar.text};
  margin: 0 10px;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.colors.link.hover};
  }
  align-self : center;
`;


