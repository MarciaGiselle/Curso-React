import React, { useReducer,  createRef } from 'react';
import { v4 as uuid } from 'uuid';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import { SELECCIONAR_TAREAS,
        AGREGAR_TAREA, 
        VALIDAR_TAREA, 
        ELIMINAR_TAREA,
        MODIFICAR_TAREA,
        ESTADO_TAREA,
        TAREA_A_MODIFICAR
    } from '../../types';

const TaskState = props => {

    const inicialState = {
        tareas: [ 
             {id: 1, nombre:'Agregar carrito', estado:true, idMateria: 1 , textInput : createRef()},
             {id: 2, nombre:'Login cliente', estado:false, idMateria: 1 ,  textInput : createRef()},
             {id: 3, nombre:'Acomodar cards', estado:false, idMateria: 2},
             {id: 4, nombre:'Colores', estado:true, idMateria: 2},
             {id: 5, nombre:'Tipografias', estado:false, idMateria: 3},
             {id: 6, nombre:'Calculos', estado:false, idMateria: 3} 
            ],
        tareasDeMateria: null,
        errorTarea: false,
        tareaAModificar: null     

    }

    //dispatch
    const [state, dispatch] = useReducer(taskReducer, inicialState);

    const obtenerTareasDeMateria = id =>{
        dispatch({
            type: SELECCIONAR_TAREAS,
            payload: id 
        })

    }

    const nuevaTarea = tarea => {
        tarea.id = uuid(); 
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }
    
    const eliminarTarea = tarea => {
        dispatch({
            type:ELIMINAR_TAREA,
            payload: tarea
        })
    }

    const modificarTarea = tarea => {
        dispatch({
            type: MODIFICAR_TAREA,
            payload: tarea 
        })
    }

    const cambiarEstado = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }

    const setTareaAModificar = tarea => {
        dispatch({
            type: TAREA_A_MODIFICAR,
            payload: tarea
        })
    }

    return (  
        <taskContext.Provider
            value={{
                tareasDeMateria: state.tareasDeMateria,
                errorTarea: state.errorTarea,
                tareaAModificar: state.tareaAModificar,
                obtenerTareasDeMateria,
                nuevaTarea,
                validarTarea,
                eliminarTarea,
                modificarTarea,
                cambiarEstado,
                setTareaAModificar
            }}
        
        >

            {props.children}
        </taskContext.Provider>

    );
}
 
export default TaskState;