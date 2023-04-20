import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${(props) => props.theme.colors.card.background};
  color: ${(props) => props.theme.colors.card.text };
  transition: all 0.2s ease-in-out;
  border : 0;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin: 1rem;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0 0 0.5rem;
`;

export const CardSubtitle = styled.h3`
  font-size: 18px;
  margin: 0 0 0.5rem;
`;

export const CardText = styled.p`
  font-size: 16px;
  margin: 0 0 0.5rem;
`;

export const CardLink = styled.a`
  font-size: 16px;
  text-decoration: none;
  display: block;
  color: ${(props) => props.theme.colors.link.color};
  &:hover {
    color: ${(props) => props.theme.colors.link.hover};
  }
`;

export const CardBody = styled.div`
  transition: all 0.2s ease-in-out;
  border : 0;
`;

export const CardImg = styled.img`
  object-fit: cover;
  max-height: 7rem;
  max-width: 100%;
  border-radius: 5px;
  margin-bottom: 1rem;
`;
