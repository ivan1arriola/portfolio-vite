import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';

export const HeaderContainer = styled(Navbar) `
  background-color: ${(props) => props.theme.colors.navbarBackground};
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  margin: 10px;
  border-radius: 100px;
  justify-content: space-between;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 105px;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
`;

export const HeaderBrand = styled(Navbar.Brand)`
  font-size: 24px;
  color: ${(props) => props.theme.colors.white};
`;

export const HeaderLink = styled(Navbar.Text)`
    font-size: 18px;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.link};
    margin: 0 10px;
    cursor: pointer;
    &:hover {
        color: ${(props) => props.theme.colors.primary};
    }
`;


