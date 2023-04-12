import ReactFullpage from '@fullpage/react-fullpage';

//  Pages
import Presentacion from '../pages/Presentacion';
import SobreMi from '../pages/SobreMi';
import PrincipalesHabilidades from '../pages/PrincipalesHabilidades';
import Experiencias from '../pages/Proyectos';
import Estudios from '../pages/Estudios';
import Redes from '../pages/Redes';
import Contacto from '../pages/Contacto';

const sections = [
    { component: Presentacion },
    { component: SobreMi },
    { component: PrincipalesHabilidades },
    { component: Experiencias },
    { component: Estudios },
    { component: Redes },
    //{ component: Contacto },
];

const FullPage = () => {
    return (
        <ReactFullpage
            scrollingSpeed={1000}
            credits={creditos}
            licenseKey='gplv3-license'
            navigation
            navigationPosition='left'
            navigationTooltips={['Presentación', 'Sobre mí', 'Principales habilidades', 'Experiencias', 'Estudios', 'Redes', 'Contacto']}
            showActiveTooltip
            slidesNavigation
            slidesNavPosition='bottom'
            controlArrows={false}
            verticalCentered={true}
            scrollOverflow={true}
            scrollOverflowReset={true}
            render={({ state, fullpageApi }) => {
                return (
                    <ReactFullpage.Wrapper>
                        {sections.map((section, index) => {
                            return (
                                <div key={index} className='section'>
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
