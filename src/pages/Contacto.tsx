import ContainerPagina from "../styledcomponents/ContainerPagina";
import Titulo from "../styledcomponents/Titulo";
import Texto from "../styledcomponents/Texto";
import Redes from "../components/Redes";
import FormEmail from "../components/FormEmail";

const Contacto: React.FC = () => {
    return (
        <ContainerPagina className="contacto">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Titulo className="display-4">Contacto</Titulo>
                        <Texto className="lead">
                            Si tienes alguna duda o quieres contactar conmigo, puedes hacerlo
                            a través de cualquiera de las redes sociales.
                        </Texto>
                        <Texto className="lead">
                            También puedes enviarme un correo a{' '}
                            <a href="mailto:1ivan.arriola@gmail.com">
                                1ivan.arriola@gmail.com
                            </a>
                        </Texto>
                        <Redes />
                    </div>
                    <div className="col-12 col-md-6">
                      
                       <FormEmail />
                    </div>
                    
                </div>
            </div>
        </ContainerPagina>
    );
};

export default Contacto;

