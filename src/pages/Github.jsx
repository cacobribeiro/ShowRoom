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

  return (
    <div>
      <div>GITHUB REPOSITORIOS</div>
      <div>
        {!loading
          ? 'L O A D I N G . . . .'
          : repos.map((e) => {
              return (
                <Link to={e.html_url}>
                  <div>
                    <p>{e.name}</p>
                  </div>
                </Link>
              );
            })}
      </div>
    </div>
  );
}

export default Github;
