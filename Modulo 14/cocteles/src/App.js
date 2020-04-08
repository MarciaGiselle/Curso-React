import React, {Fragment} from 'react';
import Header from './Components/Header'; 
import Formulario from './Components/Formulario'; 
import CategoriasProvider from './Context/CategoriasContext'; 


function App() {
  return (
    <CategoriasProvider>
      <Header/>

      <div className='container mt-5'>

        <div className="row">
          <Formulario/>
        </div>
      </div>
    </CategoriasProvider>
  );
}

export default App;
