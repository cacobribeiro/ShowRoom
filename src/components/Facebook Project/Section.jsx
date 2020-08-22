import React from 'react';

function Section() {
  return (
    <section className="gradient">
      <div className="wrapper fb-content">
        <div className="fb-left">
          <p>
            O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua
            vida.
          </p>
          <img
            className="img"
            id="facebook-networking"
            src="networking.png"
            alt=""
            width="537"
            height="195"
          />
        </div>
        <div className="fb-right">
          <div className="chamada">
            <h2 className="h2">Abra uma conta</h2>
            <h4 className="h4">É rápido e fácil.</h4>
          </div>
          <form action="" className="form-fb-content" id="forms-cad">
            <div className="order-input">
              <input
                type="text"
                name=""
                id="user"
                className="input-fb input-fb-sm"
                placeholder="Nome"
              />
              <input
                type="text"
                name=""
                id="userLast"
                className="input-fb input-fb-sm"
                placeholder="Sobrenome"
              />
            </div>
            <input
              type="text"
              name=""
              id="email"
              className="input-fb"
              data-validate-field="email phone"
              placeholder="Celular ou email"
            />
            <input
              type="password"
              name=""
              id="password"
              className="input-fb"
              placeholder="Nova senha"
            />
            <div className="date">
              <p className="date-gender">Data de nascimento</p>
              <input
                type="text"
                name=""
                id="nascimento"
                className="input-fb input-fb-sm"
                placeholder="dd/mm/aaaa"
              />
            </div>
            <div className="gender">
              <p className="date-gender">Gênero</p>
              <span>
                <label>
                  <input type="radio" id="F" value="Feminino" name="genre" />
                  Feminino
                </label>
                <label>
                  <input type="radio" id="M" value="Masculino" name="genre" />
                  Masculino
                </label>
                <label>
                  <input type="radio" id="P" value="Personalizado" name="genre" />
                  Personalizado
                </label>
              </span>
            </div>
            <p className="warning-form">
              Ao clicar em Cadastre-se, você concorda com nossos <a href="...">Termos</a>,{' '}
              <a href="...">Política de Dados</a> e <a href="...">Política de Cookies</a>. Você pode
              receber notificações por SMS e pode cancelar isso quando quiser.
            </p>
            <button id="facebook-register" className="btn-fb-form">
              Cadastre-se
            </button>
          </form>
          <div className="last-p">
            <p>
              <a href="...">Criar uma Página</a> para uma celebridade, banda ou empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;
