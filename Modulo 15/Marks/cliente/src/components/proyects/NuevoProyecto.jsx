import React, { Fragment, useState, useContext } from 'react';
import projectContext from '../../context/projects/projectContext';


const NuevoProyecto = () => {

    //obtener el state del formulario
    //traigo el context
    const proyectoContext = useContext(projectContext);
    //obtengo el valor de la variables
    const{ formularioProyecto, mostrarFormulario, agregarProyectos, errorFormulario, mostrarError } = proyectoContext;

    const [error, setError] = useState(false);
    const [proyecto, setProyecto] = useState({
        nombre:''
    });

    const { nombre } = proyecto;

    const onChangeProyecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitProyecto = e => {
        e.preventDefault();

        if(nombre.trim() === ''){
            mostrarError();
            return;
        }

        agregarProyectos(proyecto);
        setProyecto({
            nombre: ''
        });
    }

    return (  
        <Fragment>
            <button
                type='button'
                className='btn btn-block btn-primario'
                onClick = {() => mostrarFormulario()}
            >Nuevo Proyecto
            </button>
            
            { formularioProyecto
            
            ?
                <form
                    className='formulario-nuevo-proyecto'
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre del proyecto'
                        name='nombre'
                        value={nombre}
                        onChange={onChangeProyecto}
                    />
            {errorFormulario ? <p className='mensaje error'> <span>	&#x26A0;&#xFE0F;</span> Ingresa un nombre</p>: null}


                    <input
                        type='submit'
                        className='btn btn-primario btn-block'
                        value='Agregar proyecto'
                    />
                </form>
            
            
            : null
            }


        </Fragment>
    );
}
 
export default NuevoProyecto;
