import React, {useState} from 'react';
import Error from './Error';

const Fomulario = ({guardarBusqueda}) => {

    const [termino, guardarTermino] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagenes = e => {
        e.preventDefault();

        //Validar 
        if(termino.trim() === ''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //Enviar el componente de búsqueda al componente principal 
        guardarBusqueda(termino);

    }

    return ( 

        <form
            onSubmit={buscarImagenes}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo, café o casa"
                        onChange={ e => guardarTermino(e.target.value)}

                    />
                </div>
                <div className="form-group col-md-4">
                    <input
                        type="submit"
                        className="btn btn-lg btn-danger btn-block"
                        value="Buscar"
                    />
                </div>
            </div>

            { error ? <Error mensaje="Agregar un termino de búsqueda"/> : null }
        </form>

     );
}
 
export default Fomulario;