const callRepos = () => {
  fetch('https://api.github.com/users/cacobribeiro/repos').then((data) => data.json());
};

export default callRepos;
