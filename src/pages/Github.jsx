import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRepos } from '../actions/actionRepositories';

function Github() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepos());
  }, []);

  const repos = useSelector((state) => state.reducerRepositories.repos);
  const loading = useSelector((state) => state.reducerRepositories.loading);
  const redirect = (url) => (window.location.href = url);

  return (
    <div className="container-fluid">
      {!loading ? (
        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        repos.map((e) => {
          return (
            <div class="mt-3 container-sm card w-75">
              <div class="card-body">
                <h5 class="card-title">Repositório: {e.name}</h5>
                <p class="card-text">Linguagens: {e.language ? e.language : 'Nenhuma'}</p>
                <a href={e.html_url} class="btn btn-primary">
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
