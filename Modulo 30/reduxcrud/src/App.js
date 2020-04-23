import React from 'react';
import Header from './components/Header';
import Listado from './components/Listado';
import NuevoLibro from './components/NuevoLibro';
import EditarLibro from './components/EditarLibro';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Router>
      <Provider store={store}>
      <Header/>
      <div className='container'>
          <Switch>
              <Route exact path='/' component = {Listado}></Route>
              <Route exact path='/libros/nuevo' component = {NuevoLibro}></Route>
              <Route exact path='/libros/editar/:id' component = {EditarLibro}></Route>
          </Switch>
      </div>
      </Provider>
    </Router>
  );
}

export default App;
