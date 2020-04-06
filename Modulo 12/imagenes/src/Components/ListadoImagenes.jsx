import React from 'react';
import Imagen from './Imagen';
import PropTypes from 'prop-types';

const ListadoImagenes = ({imagenes}) => {

    if(imagenes === null) return null;
    return (  

        <div className='col-12 row p-5'>
            {imagenes.map(imagen => (
                <Imagen
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>

    );
}
 
ListadoImagenes.propTypes = {
    imagenes : PropTypes.array.isRequired
  }
export default ListadoImagenes;