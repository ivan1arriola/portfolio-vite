
const FormEmail = () => (
    <div className="container">
        <form target="_blank" action="https://formsubmit.co/1ivan.arriola@gmail.com" method="POST">
            <div className="form-group">
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Introduce tu nombre"
                    name="nombre"
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Introduce tu email"
                    name="email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    className="form-control"
                    id="mensaje"
                    rows={3}
                    placeholder="Introduce tu mensaje"
                    name="mensaje"
                />
            </div>
            <button type="submit" className="btn btn-primary">
                Enviar
            </button>
        </form>
    </div>
);

export default FormEmail;
