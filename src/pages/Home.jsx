import React from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const skills = useSelector((state) => state.about.skills);
  const objetive = useSelector((state) => state.about.objetive);
  const resume = useSelector((state) => state.about.resume);
  return (
    <div className="container-home">
      <div>
        <h1>Caio Bueno Ribeiro</h1>
      </div>
      <div>
        <h2>Objetivos:</h2>
        <p>{objetive}</p>
      </div>
      <div>
        <h2>Resumo:</h2>
        <p>
          <p>{resume}</p>
        </p>
      </div>
      <div>
        <h1>Habilidades / Ferramentas:</h1>
        <ol className="ol-conteiner">
          {skills.map((skill, index) => (
            <li className="skills-map">
              <p className="skill-name">{skill.name}:</p>
              <p className={skill.status === ' SKILLED' ? 'skill-done' : 'skill-progress'}>
                {skill.status}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Home;
