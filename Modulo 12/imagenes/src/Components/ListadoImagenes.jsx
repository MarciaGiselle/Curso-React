import React from 'react';
import Imagen from './Imagen';

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
 
export default ListadoImagenes;