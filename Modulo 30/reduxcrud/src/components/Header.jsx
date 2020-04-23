import React from 'react'

const Header = () => {
    return ( 
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary justify-content-between'>
            <div className='container'>
                <h1>
                    BIBLIOTECA Redux
                </h1>
            </div>
            <a href='/libros/nuevo'
                className='btn btn-danger nuevo-post d-block d-inline-block'>
                Agregar libro &#43;</a>
        </nav>
     );
}
 
export default Header;