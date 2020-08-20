import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRepos } from '../actions/actionRepositories';
import callRepos from '../services/repositories';

function Github() {
  const dispatch = useDispatch();
  dispatch(fetchRepos());
  console.log(callRepos());
  return (
    <div>
      <div>GITHUB REPOSITORIOS</div>
    </div>
  );
}

export default Github;
