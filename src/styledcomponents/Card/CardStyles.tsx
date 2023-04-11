import styled from 'styled-components';
import { Card as BootstrapCard } from 'react-bootstrap';

export const Card = styled(BootstrapCard)`
  background-color: ${(props) => props.theme.colors.card.background};
  color: ${(props) => props.theme.colors.card.text };
  transition: all 0.2s ease-in-out;
  border : 0;
`;

export const CardTitle = styled(BootstrapCard.Title)`
  font-size: 24px;
`;

export const CardSubtitle = styled(BootstrapCard.Subtitle)`
  font-size: 18px;
`;

export const CardText = styled(BootstrapCard.Text)`
  font-size: 16px;
`;

export const CardLink = styled(BootstrapCard.Link)`
  font-size: 16px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.link.color};
  &:hover {
    color: ${(props) => props.theme.colors.link.hover};
  }
`;

export const CardBody = styled(BootstrapCard.Body)`
  transition: all 0.2s ease-in-out;
  border : 0;
`;

export const CardImg = styled(BootstrapCard.Img)`
  object-fit: cover;
  max-height: 7rem;
`;