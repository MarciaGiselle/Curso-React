import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import projectContext from '../../context/projects/projectContext';

const ListadoProyectos = () => {

  //extraigo los proyectos del state inicial
  const proyectoContext = useContext(projectContext);
  const{ proyectos, obtenerProyectos } = proyectoContext;

  //consulto si tiene contenido
  useEffect(() => {
      obtenerProyectos();
  }, [])
  

  return (
    <div className="proyectos">
      <h2>Tus proyectos</h2>
      <ul className="listado-proyectos">
        {proyectos.map((proyecto) => (
          <Proyecto 
            key={proyecto.id}
            proyecto={proyecto} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoProyectos;
