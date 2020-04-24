import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
      <div className="container">
        <h1>
          <Link to={"/"} className="text-light">
            BIBLIOTECA Redux
          </Link>
        </h1>
      </div>
      <a
        href="/libros/nuevo"
        className="btn btn-danger nuevo-post d-block d-inline-block"
      >
        Agregar libro &#43;
      </a>
    </nav>
  );
};

export default Header;
