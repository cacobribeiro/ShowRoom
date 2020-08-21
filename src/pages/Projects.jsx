import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
import facebookLogo from '../images/facebook-logo.jpg';

function Projects() {
  const dispatch = useDispatch();
  const projetos = useSelector((state) => state.projetos.projetos);
  const loading = useSelector((state) => state.loading);

  console.log(projetos, loading);

  useEffect(() => {
    dispatch({ type: 'SHOW_PROJECTS', loading: true });
  }, []);

  return (
    <div className="container-fluid">
      {loading ? (
        <Loading />
      ) : (
        projetos.map((e) => {
          return (
            <div class="border border-primary card mb-3 mt-3">
              <Link to={e.url}>
                <img src={facebookLogo} class="card-img-top" alt={e.name} />
              </Link>
              <div class="card-body">
                <h5 class="card-title">{e.name}</h5>
                <p class="card-text">{e.describe}</p>
                <p class="card-text">{e.style}</p>
                <p class="card-text">
                  <small class="text-muted">{e.type}</small>
                </p>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Projects;
