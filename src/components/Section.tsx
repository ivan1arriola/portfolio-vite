import React, { ComponentType } from 'react';

import Presentacion from '../pages/Presentacion';
import SobreMi from '../pages/SobreMi';
import PrincipalesHabilidades from '../pages/PrincipalesHabilidades';
import Experiencias from '../pages/Proyectos';
import Estudios from '../pages/Estudios';
import Redes from '../pages/Redes';

const components: Record<string, ComponentType<any>> = {
  Presentacion,
  SobreMi,
  PrincipalesHabilidades,
  Experiencias,
  Estudios,
  Redes,
};

interface SectionProps {
  component: keyof typeof components;
}

const Section: React.FC<SectionProps> = ({ component }) => {
  const Component = components[component];
  return <div className="section"><Component /></div>;
};

export default Section;
