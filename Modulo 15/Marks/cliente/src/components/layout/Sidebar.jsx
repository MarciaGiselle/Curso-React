import React from "react";
import NuevoProyecto from "../proyects/NuevoProyecto";
import ListadoProyectos from "../proyects/ListadoProyectos";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MARTE<span>Tasks</span>
      </h1>

      <NuevoProyecto/>
        <br/>
      <ListadoProyectos />
    </aside>
  );
};

export default Sidebar;
