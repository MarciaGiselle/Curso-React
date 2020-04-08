import React, { useContext, useState } from 'react';
import {CategoriasContext} from '../Context/CategoriasContext';
import { RecetasContext } from '../Context/RecetasContext';

const Formulario = () => {

    //por medio del context traigo el listado de categorias
    const {categorias}= useContext(CategoriasContext);
    //paso la busqueda al context para hacer la busqueda de recetas
    const {setBusquedaParaApi, setConsultarApi}= useContext(RecetasContext);

    const [busqueda, setBusqueda] = useState({
        ingrediente : '',
        categoria : 'Ordinary Drink'
    });

    const guardarBusqueda = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }


    return (  
       <form 
            className= 'col-12'
            onSubmit= {
                e => {
                    e.preventDefault();
                    setBusquedaParaApi(busqueda);
                    setConsultarApi(true)      
            }}
       >
           <fieldset className='text-center  mb-4'>
               <legend>Busca bebidas por categoría o ingrediente</legend>
           </fieldset>

        <div className='row'>
            <div className='col-md-5'>
                <input
                    type='text'
                    name='ingrediente'
                    className='form-control'
                    placeholder='Ingrediente'
                    onChange={guardarBusqueda}
                />
            </div>
            <div className='col-md-4'>
                <select
                    className='form-control'
                    name='categoria'
                    onChange={guardarBusqueda}
                >
                    {categorias.map(categoria =>
                        <option 
                            key={categoria.strCategory}
                            value={categoria.strCategory}
                        >{categoria.strCategory}</option>
                    )}
                </select>
            </div>
            <div className='col-md-3'>
                <input type="submit"
                className='btn btn-block btn-success'
                value='Buscar recetas'/>
            </div>
        </div>

       </form>

    );
}
 
export default Formulario;