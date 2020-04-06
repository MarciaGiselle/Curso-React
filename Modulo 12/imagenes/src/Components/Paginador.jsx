import React from 'react';
import PropTypes from 'prop-types';

const Paginador = ({paginaActual, totalPaginas, setPaginaActual}) => {
   
    const paginaAnterior = () => {
        if(paginaActual + 1 > 0){
            setPaginaActual(paginaActual - 1);
        }
        return;
    }

    const paginaSiguiente = () => {
        if(paginaActual + 1 <= totalPaginas){
            setPaginaActual(paginaActual + 1);
        }
        return;
    }

    return (  

        <div className='row mb-5 justify-content-center'>
           { paginaActual === 1 ? null :
           <button
                type='button'
                className='btn btn-info mr-1'
                onClick={paginaAnterior}
            >&laquo; Anterior
            </button>
           }
            
            { paginaActual === totalPaginas ? null :
            <button
                type='button'
                className='btn btn-info mr-1'
                onClick={paginaSiguiente}
                >Siguiente &raquo;
            </button>
            
            }
           
        </div>
    );
}

Paginador.propTypes = {
    paginaActual : PropTypes.number.isRequired,
    totalPaginas : PropTypes.number.isRequired,
    setPaginaActual : PropTypes.func.isRequired
}
 
export default Paginador;