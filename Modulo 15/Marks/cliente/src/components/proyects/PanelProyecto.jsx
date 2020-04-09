import React from 'react';
import Sidebar from '../layout/Sidebar';

const Proyecto = () => {
    return (
        <div className='contenedor-app'>
          <aside>
            <Sidebar></Sidebar>
          </aside>

          <div className='seccion-principal'>
            <main>
              <div className='contenedor-tareas'>

              </div>
            </main>
          </div>
        </div>
      );
}
 
export default Proyecto;
