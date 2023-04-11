import styled from 'styled-components';
import { Card as BootstrapCard } from 'react-bootstrap';

export const Card = styled(BootstrapCard)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease-in-out;
`;

export const CardTitle = styled(BootstrapCard.Title)`
  font-size: 24px;
  color: var(--primary);
`;

export const CardSubtitle = styled(BootstrapCard.Subtitle)`
  font-size: 18px;
  color: var(--primary);
`;

export const CardText = styled(BootstrapCard.Text)`
  font-size: 16px;
  color: var(--primary);
`;

export const CardLink = styled(BootstrapCard.Link)`
  font-size: 16px;
  color: var(--primary);
`;

export const CardBody = styled(BootstrapCard.Body)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.2s ease-in-out;
`;

export const CardImg = styled(BootstrapCard.Img)`
  object-fit: cover;
  max-height: 10rem;
`;