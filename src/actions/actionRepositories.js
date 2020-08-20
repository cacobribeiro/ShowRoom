import callRepos from '../services/repositories';

export const CALL_REPOS = 'CALL_REPOS';
export const CALL_REPOS_SUCESS = 'CALL_REPOS_SUCESS';

export const firstRepos = () => ({
  type: CALL_REPOS,
});

export const secondRepos = (repos) => ({
  type: CALL_REPOS_SUCESS,
  repos,
});

export function fetchRepos() {
  return (dispatch) => {
    dispatch(firstRepos());
    return callRepos().then((data) => dispatch(secondRepos(data)));
  };
}
