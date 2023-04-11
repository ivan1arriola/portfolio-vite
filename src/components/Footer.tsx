import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.background };
  color: ${props => props.theme.colors.white};
  text-align: center;
    padding: 10px;
    margin: 0 10px 0 10px;
`;

const FooterText = styled.span`
color: ${props => props.theme.colors.primary};
  font-size: 16px;
  margin: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div>
        <FooterText>Ivan Arriola - Portfolio</FooterText>
      </div>
    </FooterContainer>
  );
};

export default Footer;
