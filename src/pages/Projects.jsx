import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';

function Projects() {
  const dispatch = useDispatch();
  const projetos = useSelector((state) => state.projetos.projetos);
  const loading = useSelector((state) => state.loading);

  console.log(projetos, loading);

  useEffect(() => {
    dispatch({ type: 'SHOW_PROJECTS', loading: true });
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container-fluid">
      {loading ? (
        <Loading />
      ) : (
        projetos.map((e) => {
          return (
            <div key={e.id} className="border border-primary card mb-3 mt-3">
              <Link to={e.url}>
                <img
                  style={{ backgroundImage: `url(${e.thumb})` }}
                  className="card-img-top"
                  alt={e.name}
                />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{e.name}</h5>
                <p className="card-text">{e.describe}</p>
                <p className="card-text">{e.style}</p>
                {e.done ? (
                  <span className="ml-1 badge badge-pill float-right badge-success">
                    Concluido!
                  </span>
                ) : (
                  <span className="badge badge-pill float-right badge-danger">Desenvolvendo!</span>
                )}
                <p className="card-text">
                  <small className="text-muted">{e.type}</small>
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
