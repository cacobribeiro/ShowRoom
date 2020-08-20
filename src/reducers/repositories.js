const INITIAL_STATE = {
  repos: [],
  loading: false,
};

export const reducerRepositories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CALL_REPOS':
      return {
        ...state,
      };
    case 'CALL_REPOS_SUCESS':
      return {
        ...state,
        repos: action.repos,
        loading: true,
      };
    default:
      return state;
  }
};
