import React from 'react';
import { Redirect, Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header-fix">
      <div>
        <Link to="/home">
          <button>Inicio</button>
        </Link>
      </div>
      <div>
        <Link to="/projects">
          <button>Projetos</button>
        </Link>
      </div>
      <div>
        <Link to="/github">
          <button>GitHub</button>
        </Link>
      </div>
      <div>
        <button onClick={() => window.open('https://www.linkedin.com/in/cacobribeiro/')}>
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Header;
