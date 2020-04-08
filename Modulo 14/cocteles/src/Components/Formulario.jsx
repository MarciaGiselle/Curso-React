import React, {useContext} from 'react';
import {CategoriasContext} from '../Context/CategoriasContext';

const Formulario = () => {

    const {categorias}= useContext(CategoriasContext);

    console.log(categorias);

    return (  
       <form className= 'col-12'>
           <fieldset className='text-center'>
               <legend>Busca bebidas por categoria o ingrediente</legend>
           </fieldset>

        <div className='row'>
            <div className='col-md-4'>
                <input
                    type='text'
                    name='nombre'
                    className='form-control'
                    placeholder='Ingrediente'
                />
            </div>
            <div className='col-md-4'>
                <select
                    className='form-control'
                    name='categoria'
                >
                    <option value=''>Selecciona categoria</option>

                </select>
            </div>
            <div className='col-md-4'>
                <input type="submit"
                className='btn btn-block btn-primary'
                value='Buscar recetas'/>
            </div>
        </div>

       </form>

    );
}
 
export default Formulario;