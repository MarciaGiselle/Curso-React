import React, { useContext, useEffect } from "react";
import Materia from "./Materia";
import projectContext from "../../context/projects/projectContext";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const ListadoMaterias = () => {
  //extraigo los proyectos del state inicial
  const proyectoContext = useContext(projectContext);
  const { materias, obtenerMaterias } = proyectoContext;

  //consulto si tiene contenido
  useEffect(() => {
    obtenerMaterias();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="proyectos">
      <h2>Tus materias</h2>
      <ul className="listado-proyectos">
        {materias.length === 0 ? (
          <li className="tarea">
            <p>No hay materias</p>
          </li>
        ) : (
          <TransitionGroup>
            {materias.map((materia) => (
              <CSSTransition
                key={materia.id}
                timeout={300}
                classNames="proyecto"
              >
                <Materia materia={materia} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
    </div>
  );
};

export default ListadoMaterias;
