import React, { useContext, useEffect } from "react";
import Materia from "./Materia";
import projectContext from '../../context/projects/projectContext';

const ListadoMaterias = () => {

  //extraigo los proyectos del state inicial
  const proyectoContext = useContext(projectContext);
  const{ materias, obtenerMaterias } = proyectoContext;

  //consulto si tiene contenido
  useEffect(() => {
    obtenerMaterias();
  }, [])
  

  return (
    <div className="proyectos">
      <h2>Tus materias</h2>
      <ul className="listado-proyectos">
        {materias.map((materia) => (
          <Materia 
            key={materia.id}
            materia={materia} />
        ))}
      </ul>
    </div>
  );
};

export default ListadoMaterias;
