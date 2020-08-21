const INITIAL_STATE = {
  loading: false,
  projetos: [
    {
      name: 'Facebook Project',
      type: 'Trybe Project',
      style: 'CSS / HTML',
      describe: `Projeto realizado no inicio do curso, a ideia do projeto era refazer a pagina inicial do Facebook utilizando HTML / CSS.
      Foi utilizado Bootstrap 4.5, CSS feito a mão e HTML para o projeto. (Ele não está responsivo, ainda)`,
      done: true,
      url: 'project/facebook',
    },
  ],
};

export const projetos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_PROJECTS':
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};
