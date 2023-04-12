import ContainerPagina from "../styledcomponents/ContainerPagina";
import Titulo from "../styledcomponents/Titulo";
import Texto from "../styledcomponents/Texto";

const Contacto: React.FC = () => {
    return (
        <ContainerPagina className="contacto">
        <div className="container">
            <div className="row">
            <div className="col-12 col-md-6">
                <Titulo className="display-4">Contacto</Titulo>
                <Texto className="lead">
                Si tienes alguna duda o quieres contactar conmigo, puedes hacerlo
                a través de cualquiera de las redes sociales o del formulario de
                contacto.
                </Texto>
                <Texto className="lead">
                También puedes enviarme un correo a{' '}
                <a href="mailto:1ivan.arriola@gmail.com">
                    1ivan.arriola@gmail.com
                </a>
                </Texto>
            </div>
            <div className="col-12 col-md-6">
                <form>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Introduce tu nombre"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Introduce tu email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                    className="form-control"
                    id="mensaje"
                    rows={3}
                    placeholder="Introduce tu mensaje"
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Enviar
                </button>
                </form>
            </div>
            </div>
        </div>
        </ContainerPagina>
    );
};

export default Contacto;