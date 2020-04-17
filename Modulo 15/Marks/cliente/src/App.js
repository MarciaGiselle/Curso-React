import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import PanelAula from "./components/proyects/PanelAula";

import MateriaState from "./context/materia/materiaState";
import TaskState from "./context/tasks/taskState";
import AlertaState from "./context/alerta/alertaState";

function App() {
  return (
    <MateriaState>
      <TaskState>
        <AlertaState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={PanelAula} />
        </Switch>
      </Router>
      </AlertaState>
      </TaskState>
    </MateriaState>
  );
}

export default App;
