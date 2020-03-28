import React from 'react'

const Footer = () => {
    let fecha = new Date().getFullYear();

    return (
        <footer className='text-center mt-5 py-1'>
            <small className='pb-1'>Todos los derechos reservados MT &copy;{fecha}</small>
        </footer>
      );
}
 
export default Footer;