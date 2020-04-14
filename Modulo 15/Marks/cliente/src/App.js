import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import PanelAula from "./components/proyects/PanelAula";

import ProjectState from "./context/projects/projectState";
import TaskState from "./context/tasks/taskState";

function App() {
  return (
    <ProjectState>
      <TaskState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={PanelAula} />
        </Switch>
      </Router>
      </TaskState>
    </ProjectState>
  );
}

export default App;