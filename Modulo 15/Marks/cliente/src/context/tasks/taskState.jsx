import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import taskContext from './taskContext';
import taskReducer from './taskReducer';
import { SELECCIONAR_TAREAS,
         AGREGAR_TAREA, 
         VALIDAR_TAREA, 
         ELIMINAR_TAREA} from '../../types';

const TaskState = props => {

    const inicialState = {
        tareas: [ 
             {id: 1, nombre:'Agregar carrito', estado:true, idMateria: 1 },
             {id: 2, nombre:'Login cliente', estado:false, idMateria: 1 },
             {id: 3, nombre:'Acomodar cards', estado:false, idMateria: 2},
             {id: 4, nombre:'Colores', estado:true, idMateria: 2},
             {id: 5, nombre:'Tipografias', estado:false, idMateria: 3},
             {id: 6, nombre:'Calculos', estado:false, idMateria: 3} 
            ],
        tareasDeMateria: null,
        errorTarea: false     

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
    
    const eliminarTarea = tarea =>{
        dispatch({
            type:ELIMINAR_TAREA,
            payload: tarea
        })
    }
    return (  
        <taskContext.Provider
            value={{
                tareasDeMateria: state.tareasDeMateria,
                errorTarea: state.errorTarea,
                obtenerTareasDeMateria,
                nuevaTarea,
                validarTarea,
                eliminarTarea
            }}
        
        >

            {props.children}
        </taskContext.Provider>

    );
}
 
export default TaskState;