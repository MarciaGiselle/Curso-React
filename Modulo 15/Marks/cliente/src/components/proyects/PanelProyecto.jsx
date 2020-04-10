import React, { useContext, Fragment } from "react";
import Sidebar from "../layout/Sidebar";
import BarraSuperior from "../layout/BarraSuperior";
import FormularioTarea from "../tasks/FormularioTarea";
import ListadoTareas from "../tasks/ListadoTareas";
import projectContext from '../../context/projects/projectContext';


const Proyecto = () => {
  const proyectoContext = useContext(projectContext);
  const{ proyectoActual } = proyectoContext;
  
  return (
    <div className="contenedor-app">
     
      <Sidebar></Sidebar>

      <div className="seccion-principal">
        <BarraSuperior />
        <main>
          {
            proyectoActual ?
            (
              <Fragment>
                <FormularioTarea />
                <div className="contenedor-tareas">
                  <ListadoTareas />
                </div>
              </Fragment>
            )
            :
            (
              <div>
                <br/>
                <h2>Selecciona una materia del panel</h2>
              </div>
            )
          }
          
        </main>
      </div>
    </div>
  );
};

export default Proyecto;
