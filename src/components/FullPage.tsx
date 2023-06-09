// route src/components/FullPage.tsx

import ReactFullpage from '@fullpage/react-fullpage';

//  Pages
import Presentacion from '../pages/Presentacion';
import SobreMi from '../pages/SobreMi';
import PrincipalesHabilidades from '../pages/PrincipalesHabilidades';
import Proyectos from '../pages/Proyectos';
import Estudios from '../pages/Estudios';
import Contacto from '../pages/Contacto';

const sections = [
    { component: Presentacion, id: "presentacion" },
    { component: SobreMi, id: "sobremi" },
    { component: PrincipalesHabilidades, id: "habilidades" },
    { component: Proyectos, id: "proyectos" },
    { component: Estudios, id: "estudios" },
    { component: Contacto, id: "contacto" },
  ];
  

const FullPage = () => {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            credits={creditos}
            licenseKey='gplv3-license'
            navigation
            navigationPosition='left'
            navigationTooltips={['Presentación', 'Sobre mí', 'Principales habilidades', 'Proyectos', 'Estudios', 'Contacto']}
            slidesNavigation
            slidesNavPosition='bottom'
            controlArrows={false}
            verticalCentered={true}
            scrollOverflow={true}
            scrollOverflowReset={true}
            render={({ state, fullpageApi }) => {
                console.log('render prop change', state);
                return (
                    <ReactFullpage.Wrapper>
                        {sections.map((section, index) => {
                            return (
                                <div key={index} className='section' id={section.id}>
                                    <section.component />
                                </div>
                            );
                        })}
                    </ReactFullpage.Wrapper>
                );
            }}
        />
    );
};

export default FullPage;

type Credits = {
    enabled?: boolean,
    label?: string,
    position?: "left" | "right"
}
const creditos: Credits = { enabled: true, label: 'Made with fullPage.js', position: 'left' };
