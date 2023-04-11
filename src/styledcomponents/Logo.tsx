import logo from "/logo.svg";
import styled from "styled-components";

const LogoImg = styled.img`
  height: 2rem;
  pointer-events: none;
  margin: 0 auto;
  display: block;
  filter: ${(props) => props.theme.filters.logo};
`;

const Logo: React.FC = () => {
  return <LogoImg src={logo} alt="logo" />;
};

export default Logo;
