import React from 'react';
import './style.css';
import Section from './Section';

const Facebook = () => (
  <div style={{ width: '100%' }}>
    <header className="container">
      <div class="top-bar">
        <div class="wrapper header">
          <h1 class="hero">
            <a href="#" target="_blank">
              <i class="facebook-logo"></i>
            </a>
          </h1>
          <div class="form-top">
            <form action="" id="">
              <div class="col-form">
                <label id="user-email-phone-label" class="label-top">
                  Email ou telefone
                </label>
                <input type="text" id="user-email-phone" class="input-form-top" />
              </div>
              <div class="col-form">
                <label class="label-top">Senha</label>
                <input type="password" id="user-password" class="input-form-top" />
                <p class="forgot-pass">
                  <a href="#">Esqueceu a conta?</a>
                </p>
              </div>
              <div class="col-form">
                <button id="button-login" class="btn-form-top">
                  Entrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
    <Section />

    <footer>
      <div class="footer">
        <div class="footer-top">
          <a href="https://pt-br.facebook.com/" class="link-language selected">
            Português (Brasil)
          </a>
          <a href="https://www.facebook.com/" class="link-language" title="English (US)">
            English (US)
          </a>
          <a href="https://es-la.facebook.com/" class="link-language" title="Spanish">
            Espanõl
          </a>
          <a href="https://fr-fr.facebook.com/" class="link-language" title="French (France)">
            Français (France)
          </a>
          <a href="https://it-it.facebook.com/" class="link-language" title="Italian">
            Italiano
          </a>
          <a href="https://ar-ar.facebook.com/" class="link-language" title="Arabic">
            العربية
          </a>
          <a href="https://de-de.facebook.com/" class="link-language" title="German">
            Deutsch
          </a>
          <a href="https://hi-in.facebook.com/" class="link-language" title="Hindi">
            हिन्दी
          </a>
          <a
            href="https://zh-cn.facebook.com/"
            class="link-language"
            title="Simplified Chinese (China)"
          >
            中文(简体)
          </a>
          <a href="https://ja-jp.facebook.com/" class="link-language" title="Japonese">
            日本語
          </a>
          <a class="btn-language-box" href="#">
            <i class="btn-language"></i>
          </a>
        </div>
        <div class="hr-footer"></div>
        <div class="footer-bottom">
          <a
            href="https://www.facebook.com/r.php"
            class="footer-options"
            title="Cadastre-se no Facebook"
          >
            Cadastre-se
          </a>
          <a
            href="https://www.facebook.com/login/"
            class="footer-options"
            title="Entrar no Facebook"
          >
            Entrar
          </a>
          <a href="https://messenger.com/" class="footer-options" title="Confira o Messeger.">
            Messenger
          </a>
          <a
            href="https://www.facebook.com/lite/"
            class="footer-options"
            title="Facebook Lite para Android."
          >
            Facebook Lite
          </a>
          <a
            href="https://www.facebook.com/watch/"
            class="footer-options"
            title="Navegue pelos nossos vídeos do Watch."
          >
            Watch{' '}
          </a>
          <a
            href="https://www.facebook.com/directory/people/"
            class="footer-options"
            title="Navegue no nosso diretório de pessoas."
          >
            Pessoas
          </a>
          <a
            href="https://www.facebook.com/directory/pages/"
            class="footer-options"
            title="Pesquisar nosso diretório de páginas."
          >
            Páginas
          </a>
          <a
            href="https://www.facebook.com/pages/category/"
            class="footer-options"
            title="Categorias de Página"
          >
            Categorias de Página
          </a>
          <a
            href="https://www.facebook.com/games/"
            class="footer-options"
            title="Confira os jogos do Facebook."
          >
            Jogos
          </a>
          <a
            href="https://www.facebook.com/places/"
            class="footer-options"
            title="Navegue pelo nosso diretório de locais."
          >
            Locais
          </a>
          <a
            href="https://www.facebook.com/marketplace/"
            class="footer-options"
            title="Compre e venda no Facebook Marketplace."
          >
            Marketplace
          </a>
          <a
            href="https://www.facebook.com/directory/groups/"
            class="footer-options"
            title="Navegue pelo nosso diretório de grupos."
          >
            Grupos
          </a>
          <a href="https://instagram.com/" class="footer-options" title="Confira o Instagram">
            Instagram
          </a>
          <a
            href="https://www.facebook.com/local/lists/245019872666104/"
            class="footer-options"
            title="Navegar pelo nosso diretório de listas locais."
          >
            Local
          </a>
          <a
            href="https://www.facebook.com/fundraisers/"
            class="footer-options"
            title="Campanhas de arrecadação de fundos"
          >
            Campanhas de arrecadação de fundos
          </a>
          <a
            href="https://www.facebook.com/biz/directory/"
            class="footer-options"
            title="Navegue pelo nosso diretório de serviços do Facebook."
          >
            Serviços
          </a>
          <a
            href="https://www.facebook.com/facebook"
            class="footer-options"
            title="Leia nosso blog, descubra a central de recursos e encontre oportunidades de trabalho."
          >
            Sobre
          </a>
          <a
            href="https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&extra_1=auto"
            class="footer-options"
            title="Anuncie no Facebook."
          >
            Criar anúncio
          </a>
          <a
            href="https://www.facebook.com/pages/create/?ref_type=site_footer"
            class="footer-options"
            title="Criar uma Página"
          >
            Criar Página
          </a>
          <a
            href="https://developers.facebook.com/?ref=pf"
            class="footer-options"
            title="Desenvolver em nossa plataforma."
          >
            Desenvolvedores
          </a>
          <a
            href="https://www.facebook.com/careers/?ref=pf"
            class="footer-options"
            title="Dê um passo adiante na sua carreira em nossa incrível empresa."
          >
            Carreiras
          </a>
          <a
            href="https://www.facebook.com/privacy/explanation"
            class="footer-options"
            title="Saiba mais sobre sua privacidade e o Facebook."
          >
            Privacidade
          </a>
          <a
            href="https://www.facebook.com/policies/cookies/"
            class="footer-options"
            title="Saiba mais sobre cookies e o Facebook"
          >
            Cookies
          </a>
          <a
            href="https://www.facebook.com/help/568137493302217"
            class="footer-options"
            title="Saiba mais sobre as Opções de anúncio."
          >
            {' '}
            Opções de anúncio
            <i class="btn-info"></i>
          </a>
          <a
            href="https://www.facebook.com/policies?ref=pf"
            class="footer-options"
            title="Leia os nossos termos e políticas."
          >
            Termos
          </a>
          <a
            href="https://www.facebook.com/help/?ref=pf"
            class="footer-options"
            title="Acesse nossa Central de Ajuda."
          >
            Ajuda
          </a>
        </div>
        <div class="copywrite">
          <span> Facebook © 2020</span>
        </div>
      </div>
    </footer>
  </div>
);
export default Facebook;
