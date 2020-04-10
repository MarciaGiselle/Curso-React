import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import PanelAula from "./components/proyects/PanelAula";
import ProjectState from "./context/projects/projectState";

function App() {
  return (
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
          <Route exact path="/proyectos" component={PanelAula} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
