import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from './Section';

interface SectionProps {
    component: string;
}

const sections: SectionProps[] = [
    { component: 'Presentacion' },
    { component: 'SobreMi' },
    { component: 'PrincipalesHabilidades' },
    { component: 'Experiencias' },
    { component: 'Estudios' },
    { component: 'Redes' },
];

type Credits = {
    enabled?: boolean,
    label?: string,
    position?: "left" | "right"
}

const creditos: Credits = {
    enabled: true, label: 'Made with fullPage.js', position: 'right'
}

const FullPage: React.FC = () => {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            credits={creditos}
            scrollHorizontally={true}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        {sections.map(({ component }, index) => (
                            <Section key={index} component={component} />
                        ))}
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default FullPage;