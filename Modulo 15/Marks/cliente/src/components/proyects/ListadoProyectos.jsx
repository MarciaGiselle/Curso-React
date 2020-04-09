import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [{ nombre: "Unos" }, { nombre: "Dos" }];

  return (
    <div className="projectos">
      <h2>Tus projectos</h2>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyectos;
