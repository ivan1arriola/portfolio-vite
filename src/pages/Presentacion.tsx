import Titulo from '../styledcomponents/Titulo';
import ContainerPagina from '../styledcomponents/ContainerPagina';
import Subtitulo from '../styledcomponents/Subtitulo';
import ReactTypingEffect from 'react-typing-effect';



const Presentacion = () => {

    return (
        <ContainerPagina>
            <Titulo>
                HOLAAAAA!
            </Titulo>
            <Subtitulo>

                <ReactTypingEffect
                    text={["Mi nombre es Iván Arriola y les doy la bienvenida a mi portfolio."]}
                    speed={70}
                    eraseDelay={700}
                    typingDelay={1000}
                    eraseSpeed={50}
                />

            </Subtitulo>
        </ContainerPagina>
    );
}

export default Presentacion;