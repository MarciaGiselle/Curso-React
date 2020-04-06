import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();  
    return (
        <footer className="page-footer deep-purple">
        <div className="footer-copyright deep-purple darken-2 ">
          <div className="container copy ">
             © {year} Todos los derechos reservados 
          </div>
        </div>
      </footer>
      );
}
 
export default Footer;