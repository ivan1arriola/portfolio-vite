import styled from 'styled-components';
import { Offcanvas as BootstrapOffcanvas } from 'react-bootstrap';

export const Offcanvas = styled(BootstrapOffcanvas)`
  background-color: ${(props) => props.theme.colors.offcanvas.background};
  color: ${(props) => props.theme.colors.offcanvas.text};
  width: 300px;
`;

export const OffcanvasHeader = styled(BootstrapOffcanvas.Header)`
  background-color: ${(props) => props.theme.colors.offcanvas.headerBackground};
  color: ${(props) => props.theme.colors.offcanvas.headerText};
  border-bottom: none;
`;

export const OffcanvasBody = styled(BootstrapOffcanvas.Body)`
  padding: 20px;
`;

export const OffcanvasContainer = styled(BootstrapOffcanvas)`
  .offcanvas-header {
    padding: 1rem;
  }
`;

export const OffcanvasTitle = styled(BootstrapOffcanvas.Title)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

