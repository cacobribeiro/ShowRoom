import React from 'react';
import { Redirect, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <Link className="btn btn-outline-light" to="/home">
        Inicio
      </Link>
      <Link className="btn btn-outline-light" to="/sobre">
        Sobre
      </Link>
      <Link className="btn btn-outline-light" to="/projects">
        Projetos
      </Link>
      <Link className="btn btn-outline-light" to="/github">
        GitHub
      </Link>
      <Link
        onClick={() => window.open('https://www.linkedin.com/in/cacobribeiro/')}
        className="btn btn-outline-light"
        to="#"
      >
        LinkedIn
      </Link>
    </div>
  );
}

export default Header;
