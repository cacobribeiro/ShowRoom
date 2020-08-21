import React from 'react';

function Home() {
  return (
    <div className="container-fluid">
      <div className="container-lg d-flex justify-content-center">
        <h1>cacobribeiro/ShowRoom</h1>
      </div>
      <div className="container-lg d-flex justify-content-center">
        <div class="card text-white bg-secondary mb-3" style={{ maxWidth: '95%' }}>
          <div class="card-header">Portifólio</div>
          <div class="card-body">
            <h5 class="card-title">
              Este site está sendo desenvolvido usando React, Hooks e Redux.
            </h5>
            <p class="card-text">
              A pouco tempo aprendi a utilizar React + Redux e foi paixão a primeira vista, achei
              uma ferramenta maravilhosa. Estudando mais a respeito aprendi que usando Hooks, nós
              seriamos capazes de utilizar deixar de lado os comandos mapStateToProps e
              mapDispatchToProps achei isso muito bacana e estou aprendendo a utilizar melhor essa
              ferramenta. Aqui irei postar meus projetos e a ideia é que vire um portifólio
              completo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
