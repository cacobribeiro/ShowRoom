const INITAL_STATE = {
  resume: `Estou cursando a Trybe e venho me aperfeiçoando a cada dia mais em desenvolvimento e
  softskills. Hoje sou muito confiante e me sinto muito preparado para exercer a minha
  função. Atualmente procuro uma vaga como Desenvolvedor Front-End, porém em 6 meses
  aproximadamente me formarei como Full-Stack. Estou a procura de algo que venha me agregar
  mais conhecimento e que eu possa agregar com o meu serviço.`,
  objetive: ` - Meu objetivo é me tornar um profissional excepcional na minha área, para agregar valor a
  todos ao meu redor. Atualmente sou Desenvolvedor Front-End, estou cursando Back-End e em
  breve serei considerado Full-Stack, formado pela Trybe.`,
  skills: [
    { name: 'Git', status: ' SKILLED' },
    { name: 'Github', status: ' SKILLED' },
    { name: 'HTML Semântico', status: ' SKILLED' },
    { name: 'CSS Responsivo', status: ' SKILLED' },
    { name: 'Javascript', status: ' SKILLED' },
    { name: 'ES6', status: ' SKILLED' },
    { name: 'Testes unitários', status: ' SKILLED' },
    { name: 'TDD', status: ' SKILLED' },
    { name: 'Jest', status: ' SKILLED' },
    { name: 'React', status: ' SKILLED' },
    { name: 'Redux', status: ' SKILLED' },
    { name: 'Hooks', status: ' SKILLED' },
    { name: 'ContextAPI', status: ' SKILLED' },
    { name: 'Metologias ágeis', status: ' SKILLED' },
    { name: 'SQL', status: 'ON PROGRESS' },
    { name: 'MongoDB', status: 'ON PROGRESS' },
    { name: 'NodeJS', status: 'COMING SOON' },
    { name: 'Deploy', status: 'COMING SOON' },
    { name: 'Python', status: 'COMING SOON' },
  ],
};

export const about = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case 'ALL_SKILLS':
      return {
        ...state,
      };
    default:
      return state;
  }
};
