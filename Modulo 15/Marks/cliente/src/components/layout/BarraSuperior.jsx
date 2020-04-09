import React from 'react'

const BarraSuperior = () => {
    return (  
        <div className='app-header'>
            <p className='nombre-usuario'>
                Hola  <span>
                    Juan Pablo
                </span>
            </p>

            <nav className='nav-principal'>
                <a href='#!'>Cerrar sesion</a>

            </nav>
        </div>
    );
}
 
export default BarraSuperior;