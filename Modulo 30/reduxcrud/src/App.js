import React from 'react';
import Header from './components/Header';
import Listado from './components/Listado';
import NuevoLibro from './components/NuevoLibro';
import EditarLibro from './components/EditarLibro';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <div className='container'>
          <Switch>
              <Route exact path='/' component = {Listado}></Route>
              <Route exact path='/libros/nuevo' component = {NuevoLibro}></Route>
              <Route exact path='/libros/editar/:id' component = {EditarLibro}></Route>
          </Switch>
      </div>
    </Router>
    
  );
}

export default App;
