import React, {Fragment} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Navegador from './components/Nav';

function App() {
  return (
    <Fragment>
     <Navegador/>      
    <Alert variant='success my-1'>  
      <h2 className='text-center'>Administrador de pacientes</h2>
    </Alert>
    </Fragment>

  );
}

export default App;
