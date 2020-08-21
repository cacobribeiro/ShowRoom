import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function AboutMe() {
  const skills = useSelector((state) => state.about.skills);
  const objetive = useSelector((state) => state.about.objetive);
  const resume = useSelector((state) => state.about.resume);

  useEffect(() => {
    // alert(`Em Construção... Entre, mas não repare a falta do CSS e Bug's`);
  }, []);

  return (
    <div className="container-lg">
      <div className="container d-flex justify-content-center">
        <blockquote class="blockquote">
          <p class="display-4 mb-0">Caio Bueno Ribeiro</p>
          <footer class="blockquote-footer">
            Desenvolvedor<cite title="Source Title">Front-End</cite>
          </footer>
        </blockquote>
      </div>
      <div class="card border-secondary mb-3" style={{ maxWidth: '95%' }}>
        <div class="card-header">Objetivo</div>
        <div class="card-body text-secondary">
          <p class="card-text">{objetive}</p>
        </div>
      </div>
      <div class="card border-secondary mb-3" style={{ maxWidth: '95%' }}>
        <div class="card-header">Resumo</div>
        <div class="card-body text-secondary">
          <p class="card-text">{resume}</p>
        </div>
      </div>
      <h1>Habilidades / Ferramentas:</h1>
      <div>
        <ul class="list-group">
          {skills.map((skill, index) => (
            <li
              key={index}
              class="list-group-item d-flex justify-content-between align-items-center"
            >
              {skill.name}
              {skill.status === ' SKILLED' ? (
                <span class="ml-1 badge badge-pill badge-success">Concluido!</span>
              ) : (
                <span class="badge badge-pill badge-danger">Em Treinamento...</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
