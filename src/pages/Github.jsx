import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRepos } from '../actions/actionRepositories';
import Loading from '../components/Loading';

function Github() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRepos());
    // eslint-disable-next-line
  }, []);

  const repos = useSelector((state) => state.reducerRepositories.repos);
  const loading = useSelector((state) => state.reducerRepositories.loading);

  return (
    <div className="container-fluid">
      {!loading ? (
        <Loading />
      ) : (
        repos.map((e) => {
          return (
            <div className="mt-3 container-sm card w-75">
              <div className="card-body">
                <h5 className="card-title">Repositório: {e.name}</h5>
                <p className="card-text">Linguagens: {e.language ? e.language : 'Nenhuma'}</p>
                <a href={e.html_url} className="btn btn-primary">
                  Ver
                </a>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Github;
