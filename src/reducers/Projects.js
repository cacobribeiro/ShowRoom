// import facebookLogo from '../images/facebook-logo.png';

const INITIAL_STATE = {
  loading: false,
  projetos: [
    {
      id: '1',
      name: 'Facebook Project',
      type: 'Trybe Project',
      style: 'CSS / HTML / BOODSTRAP 4.5',
      describe: `Projeto realizado no inicio do curso, a ideia do projeto era refazer a pagina inicial do Facebook utilizando HTML / CSS.
      Foi utilizado Bootstrap 4.5, CSS feito a mão e HTML para o projeto. (Ele não está responsivo, ainda)`,
      done: true,
      thumb: '../images/facebook-logo.png',
      url: 'project/facebook',
    },
    {
      id: '2',
      name: 'SuperMarket',
      type: 'Individual Project',
      style: 'REACT / REDUX/ HOOKS / HTML / BOODSTRAP 4.5',
      describe: `Projeto está sendo desenvolvido exclusivamente para portfolio e aprendizado, a ideia é fazer uma aplicação
      que chegue bem perto de e-commerce básico, com carrinho de compras, produtos, checkout...`,
      done: false,
      thumb: '',
      url: 'project/supermarket',
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
