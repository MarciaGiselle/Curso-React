import { SELECCIONAR_TAREAS, AGREGAR_TAREA, VALIDAR_TAREA, ELIMINAR_TAREA, ESTADO_TAREA, TAREA_A_MODIFICAR, MODIFICAR_TAREA } from '../../types';

export default (state, action) => {
    switch(action.type){
      
        case SELECCIONAR_TAREAS:
            return {
                ...state,
                tareasDeMateria: state.tareas.filter(tarea => tarea.idMateria === action.payload)
            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [ action.payload, ...state.tareas ],
                errorTarea: false

            }  
        case VALIDAR_TAREA:
            return{
                ...state,
                errorTarea: true
            }
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.filter(tarea => tarea.id !== action.payload)
            }      
        case ESTADO_TAREA:
        case MODIFICAR_TAREA:
            return{
                ...state,
                tareas: state.tareas.map(tarea => tarea.id === action.payload.id ?
                    action.payload : tarea), 
                tareaAModificar: null 
            }

        case TAREA_A_MODIFICAR:
            return{
                ...state,
                tareaAModificar: action.payload 
            }    
        default:
            return state;
    }

}