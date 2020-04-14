import React, { useContext , useState} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const FormularioTarea = () => {

    const proyectoContext = useContext(projectContext);
    const{ materiaActual } = proyectoContext;

    const tareasContext = useContext(taskContext);
    const{ nuevaTarea, obtenerTareasDeMateria, validarTarea, errorTarea} = tareasContext;
    
    const [tarea, setTarea] = useState({
        nombre:''
    });

    const { nombre } = tarea;

    const onChange = e => {
        setTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //agregar al state
        tarea.idMateria = materiaActual.id;
        tarea.estado = false;
        nuevaTarea(tarea);

        //recarga el array de tareas
        obtenerTareasDeMateria(materiaActual.id);

        //limpiar el form
        setTarea({
            nombre: ''
        })


    }
    return (  
        <div className='formulario'>
            <form
                onSubmit={onSubmit}
            >
                <div className='contenedor-input'>
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre de la tarea'
                        name='nombre'
                        value = {nombre}
                        onChange= {onChange}
                    />
                </div>
                {errorTarea ? <p className='mensaje error'> <span>	&#x26A0;&#xFE0F;</span> Ingresa un nombre para la tarea</p>: null}


                <div className='contenedor-input'>
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar tarea'
                    />
                </div>
            </form>
        </div>
    );
}
 
export default FormularioTarea;