import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.pageBackground };
  color: ${props => props.theme.colors.white};
  text-align: center;
  padding: 10px;
  margin: 0;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9999;
  transition: opacity 0.3s ease-in-out;
  opacity: 1;
  
  &:hover {
    opacity: 0;
    display: none;
  }
`;

const FooterText = styled.span`
  color: ${props => props.theme.colors.primary};
  font-size: 16px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Ivan Arriola - Portfolio</FooterText>
    </FooterContainer>
  );
};

export default Footer;
