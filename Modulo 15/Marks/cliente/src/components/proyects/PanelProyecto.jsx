import React from "react";
import Sidebar from "../layout/Sidebar";
import BarraSuperior from "../layout/BarraSuperior";
import FormularioTarea from "../tasks/FormularioTarea";
import ListadoTareas from "../tasks/ListadoTareas";

const Proyecto = () => {
  return (
    <div className="contenedor-app">
     
      <Sidebar></Sidebar>

      <div className="seccion-principal">
        <BarraSuperior />
        <main>
          <FormularioTarea />
          <div className="contenedor-tareas">
            <ListadoTareas />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Proyecto;
