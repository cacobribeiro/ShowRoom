(this.webpackJsonpPortifolio=this.webpackJsonpPortifolio||[]).push([[0],{22:function(e,a,t){e.exports=t.p+"static/media/facebook-logo.82a4d6f4.jpg"},25:function(e,a){},27:function(e,a,t){e.exports=t(41)},36:function(e,a,t){},37:function(e,a,t){},39:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var o=t(5),n=t(0),r=t.n(n),c=t(8),s=t(14),l=t.n(s);t(36),t(37);var i=function(){return r.a.createElement("div",{className:"navbar navbar-dark bg-dark"},r.a.createElement(c.b,{className:"btn m-1 btn-outline-light",to:"/home"},"Inicio"),r.a.createElement(c.b,{className:"btn m-1 btn-outline-light",to:"/sobre"},"Sobre"),r.a.createElement(c.b,{className:"btn m-1 btn-outline-light",to:"/project"},"Projetos"),r.a.createElement(c.b,{className:"btn m-1 btn-outline-light",to:"/github"},"GitHub"),r.a.createElement(c.b,{onClick:function(){return window.open("https://www.linkedin.com/in/cacobribeiro/")},className:"btn m-1 btn-outline-light",to:"#"},"LinkedIn"))},m=t(2);var d=function(){return r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"container-lg d-flex justify-content-center"},r.a.createElement("h1",null,"cacobribeiro/ShowRoom")),r.a.createElement("div",{className:"container-lg d-flex justify-content-center"},r.a.createElement("div",{class:"card text-white bg-secondary mb-3",style:{maxWidth:"95%"}},r.a.createElement("div",{class:"card-header"},"Portif\xf3lio"),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},"Este site est\xe1 sendo desenvolvido usando React, Hooks e Redux."),r.a.createElement("p",{class:"card-text"},"A pouco tempo aprendi a utilizar React + Redux e foi paix\xe3o a primeira vista, achei uma ferramenta maravilhosa. Estudando mais a respeito aprendi que usando Hooks, n\xf3s seriamos capazes de utilizar deixar de lado os comandos mapStateToProps e mapDispatchToProps achei isso muito bacana e estou aprendendo a utilizar melhor essa ferramenta. Aqui irei postar meus projetos e a ideia \xe9 que vire um portif\xf3lio completo.")))))},u=function(){return fetch("https://api.github.com/users/cacobribeiro/repos").then((function(e){return e.json()}))};var p=function(){return r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{class:"spinner-border",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading...")))};var f=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e((function(e){return e({type:"CALL_REPOS"}),u().then((function(a){return e({type:"CALL_REPOS_SUCESS",repos:a})}))}))}),[]);var a=Object(o.c)((function(e){return e.reducerRepositories.repos})),t=Object(o.c)((function(e){return e.reducerRepositories.loading}));return r.a.createElement("div",{className:"container-fluid"},t?a.map((function(e){return r.a.createElement("div",{class:"mt-3 container-sm card w-75"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},"Reposit\xf3rio: ",e.name),r.a.createElement("p",{class:"card-text"},"Linguagens: ",e.language?e.language:"Nenhuma"),r.a.createElement("a",{href:e.html_url,class:"btn btn-primary"},"Ver")))})):r.a.createElement(p,null))},E=t(22),b=t.n(E);var h=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.projetos.projetos})),t=Object(o.c)((function(e){return e.loading}));return console.log(a,t),Object(n.useEffect)((function(){e({type:"SHOW_PROJECTS",loading:!0})}),[]),r.a.createElement("div",{className:"container-fluid"},t?r.a.createElement(p,null):a.map((function(e){return r.a.createElement("div",{class:"border border-primary card mb-3 mt-3"},r.a.createElement(c.b,{to:e.url},r.a.createElement("img",{src:b.a,class:"card-img-top",alt:e.name})),r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title"},e.name),r.a.createElement("p",{class:"card-text"},e.describe),r.a.createElement("p",{class:"card-text"},e.style),r.a.createElement("p",{class:"card-text"},r.a.createElement("small",{class:"text-muted"},e.type))))})))};var g=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container-lx d-flex"},r.a.createElement("h1",null,"Pagina n\xe3o encontrada, sorry!")))};var v=function(){var e=Object(o.c)((function(e){return e.about.skills})),a=Object(o.c)((function(e){return e.about.objetive})),t=Object(o.c)((function(e){return e.about.resume}));return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",{className:"container-lg"},r.a.createElement("div",{className:"container d-flex justify-content-center"},r.a.createElement("blockquote",{class:"blockquote"},r.a.createElement("p",{class:"display-4 mb-0"},"Caio Bueno Ribeiro"),r.a.createElement("footer",{class:"blockquote-footer"},"Desenvolvedor",r.a.createElement("cite",{title:"Source Title"},"Front-End")))),r.a.createElement("div",{class:"card border-secondary mb-3",style:{maxWidth:"95%"}},r.a.createElement("div",{class:"card-header"},"Objetivo"),r.a.createElement("div",{class:"card-body text-secondary"},r.a.createElement("p",{class:"card-text"},a))),r.a.createElement("div",{class:"card border-secondary mb-3",style:{maxWidth:"95%"}},r.a.createElement("div",{class:"card-header"},"Resumo"),r.a.createElement("div",{class:"card-body text-secondary"},r.a.createElement("p",{class:"card-text"},t))),r.a.createElement("h1",null,"Habilidades / Ferramentas:"),r.a.createElement("div",null,r.a.createElement("ul",{class:"list-group"},e.map((function(e,a){return r.a.createElement("li",{key:a,class:"list-group-item d-flex justify-content-between align-items-center"},e.name," SKILLED"===e.status?r.a.createElement("span",{class:"ml-1 badge badge-pill badge-success"},"Concluido!"):r.a.createElement("span",{class:"badge badge-pill badge-danger"},"Em Treinamento..."))})))))};t(39);var w=function(){return r.a.createElement("section",{className:"gradient"},r.a.createElement("div",{className:"wrapper fb-content"},r.a.createElement("div",{className:"fb-left"},r.a.createElement("p",null,"O Facebook ajuda voc\xea a se conectar e compartilhar com as pessoas que fazem parte da sua vida."),r.a.createElement("img",{className:"img",id:"facebook-networking",src:"networking.png",alt:"",width:"537",height:"195"})),r.a.createElement("div",{className:"fb-right"},r.a.createElement("div",{className:"chamada"},r.a.createElement("h2",{className:"h2"},"Abra uma conta"),r.a.createElement("h4",{className:"h4"},"\xc9 r\xe1pido e f\xe1cil.")),r.a.createElement("form",{action:"",className:"form-fb-content",id:"forms-cad"},r.a.createElement("div",{className:"order-input"},r.a.createElement("input",{type:"text",name:"",id:"user",className:"input-fb input-fb-sm",placeholder:"Nome"}),r.a.createElement("input",{type:"text",name:"",id:"userLast",className:"input-fb input-fb-sm",placeholder:"Sobrenome"})),r.a.createElement("input",{type:"text",name:"",id:"email",className:"input-fb","data-validate-field":"email phone",placeholder:"Celular ou email"}),r.a.createElement("input",{type:"password",name:"",id:"password",className:"input-fb",placeholder:"Nova senha"}),r.a.createElement("div",{className:"date"},r.a.createElement("p",{className:"date-gender"},"Data de nascimento"),r.a.createElement("input",{type:"text",name:"",id:"nascimento",className:"input-fb input-fb-sm",placeholder:"dd/mm/aaaa"})),r.a.createElement("div",{className:"gender"},r.a.createElement("p",{className:"date-gender"},"G\xeanero"),r.a.createElement("span",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"F",value:"Feminino",name:"genre"}),"Feminino"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"M",value:"Masculino",name:"genre"}),"Masculino"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"P",value:"Personalizado",name:"genre"}),"Personalizado"))),r.a.createElement("p",{className:"warning-form"},"Ao clicar em Cadastre-se, voc\xea concorda com nossos ",r.a.createElement("a",null,"Termos"),","," ",r.a.createElement("a",null,"Pol\xedtica de Dados")," e ",r.a.createElement("a",null,"Pol\xedtica de Cookies"),". Voc\xea pode receber notifica\xe7\xf5es por SMS e pode cancelar isso quando quiser."),r.a.createElement("button",{id:"facebook-register",className:"btn-fb-form"},"Cadastre-se")),r.a.createElement("div",{className:"last-p"},r.a.createElement("p",null,r.a.createElement("a",null,"Criar uma P\xe1gina")," para uma celebridade, banda ou empresa.")))))},k=function(){return r.a.createElement("div",{style:{width:"100%"}},r.a.createElement("header",{className:"container"},r.a.createElement("div",{class:"top-bar"},r.a.createElement("div",{class:"wrapper header"},r.a.createElement("h1",{class:"hero"},r.a.createElement("a",{href:"#",target:"_blank"},r.a.createElement("i",{class:"facebook-logo"}))),r.a.createElement("div",{class:"form-top"},r.a.createElement("form",{action:"",id:""},r.a.createElement("div",{class:"col-form"},r.a.createElement("label",{id:"user-email-phone-label",class:"label-top"},"Email ou telefone"),r.a.createElement("input",{type:"text",id:"user-email-phone",class:"input-form-top"})),r.a.createElement("div",{class:"col-form"},r.a.createElement("label",{class:"label-top"},"Senha"),r.a.createElement("input",{type:"password",id:"user-password",class:"input-form-top"}),r.a.createElement("p",{class:"forgot-pass"},r.a.createElement("a",{href:"#"},"Esqueceu a conta?"))),r.a.createElement("div",{class:"col-form"},r.a.createElement("button",{id:"button-login",class:"btn-form-top"},"Entrar"))))))),r.a.createElement(w,null),r.a.createElement("footer",null,r.a.createElement("div",{class:"footer"},r.a.createElement("div",{class:"footer-top"},r.a.createElement("a",{href:"https://pt-br.facebook.com/",class:"link-language selected"},"Portugu\xeas (Brasil)"),r.a.createElement("a",{href:"https://www.facebook.com/",class:"link-language",title:"English (US)"},"English (US)"),r.a.createElement("a",{href:"https://es-la.facebook.com/",class:"link-language",title:"Spanish"},"Espan\xf5l"),r.a.createElement("a",{href:"https://fr-fr.facebook.com/",class:"link-language",title:"French (France)"},"Fran\xe7ais (France)"),r.a.createElement("a",{href:"https://it-it.facebook.com/",class:"link-language",title:"Italian"},"Italiano"),r.a.createElement("a",{href:"https://ar-ar.facebook.com/",class:"link-language",title:"Arabic"},"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"),r.a.createElement("a",{href:"https://de-de.facebook.com/",class:"link-language",title:"German"},"Deutsch"),r.a.createElement("a",{href:"https://hi-in.facebook.com/",class:"link-language",title:"Hindi"},"\u0939\u093f\u0928\u094d\u0926\u0940"),r.a.createElement("a",{href:"https://zh-cn.facebook.com/",class:"link-language",title:"Simplified Chinese (China)"},"\u4e2d\u6587(\u7b80\u4f53)"),r.a.createElement("a",{href:"https://ja-jp.facebook.com/",class:"link-language",title:"Japonese"},"\u65e5\u672c\u8a9e"),r.a.createElement("a",{class:"btn-language-box",href:"#"},r.a.createElement("i",{class:"btn-language"}))),r.a.createElement("div",{class:"hr-footer"}),r.a.createElement("div",{class:"footer-bottom"},r.a.createElement("a",{href:"https://www.facebook.com/r.php",class:"footer-options",title:"Cadastre-se no Facebook"},"Cadastre-se"),r.a.createElement("a",{href:"https://www.facebook.com/login/",class:"footer-options",title:"Entrar no Facebook"},"Entrar"),r.a.createElement("a",{href:"https://messenger.com/",class:"footer-options",title:"Confira o Messeger."},"Messenger"),r.a.createElement("a",{href:"https://www.facebook.com/lite/",class:"footer-options",title:"Facebook Lite para Android."},"Facebook Lite"),r.a.createElement("a",{href:"https://www.facebook.com/watch/",class:"footer-options",title:"Navegue pelos nossos v\xeddeos do Watch."},"Watch"," "),r.a.createElement("a",{href:"https://www.facebook.com/directory/people/",class:"footer-options",title:"Navegue no nosso diret\xf3rio de pessoas."},"Pessoas"),r.a.createElement("a",{href:"https://www.facebook.com/directory/pages/",class:"footer-options",title:"Pesquisar nosso diret\xf3rio de p\xe1ginas."},"P\xe1ginas"),r.a.createElement("a",{href:"https://www.facebook.com/pages/category/",class:"footer-options",title:"Categorias de P\xe1gina"},"Categorias de P\xe1gina"),r.a.createElement("a",{href:"https://www.facebook.com/games/",class:"footer-options",title:"Confira os jogos do Facebook."},"Jogos"),r.a.createElement("a",{href:"https://www.facebook.com/places/",class:"footer-options",title:"Navegue pelo nosso diret\xf3rio de locais."},"Locais"),r.a.createElement("a",{href:"https://www.facebook.com/marketplace/",class:"footer-options",title:"Compre e venda no Facebook Marketplace."},"Marketplace"),r.a.createElement("a",{href:"https://www.facebook.com/directory/groups/",class:"footer-options",title:"Navegue pelo nosso diret\xf3rio de grupos."},"Grupos"),r.a.createElement("a",{href:"https://instagram.com/",class:"footer-options",title:"Confira o Instagram"},"Instagram"),r.a.createElement("a",{href:"https://www.facebook.com/local/lists/245019872666104/",class:"footer-options",title:"Navegar pelo nosso diret\xf3rio de listas locais."},"Local"),r.a.createElement("a",{href:"https://www.facebook.com/fundraisers/",class:"footer-options",title:"Campanhas de arrecada\xe7\xe3o de fundos"},"Campanhas de arrecada\xe7\xe3o de fundos"),r.a.createElement("a",{href:"https://www.facebook.com/biz/directory/",class:"footer-options",title:"Navegue pelo nosso diret\xf3rio de servi\xe7os do Facebook."},"Servi\xe7os"),r.a.createElement("a",{href:"https://www.facebook.com/facebook",class:"footer-options",title:"Leia nosso blog, descubra a central de recursos e encontre oportunidades de trabalho."},"Sobre"),r.a.createElement("a",{href:"https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&extra_1=auto",class:"footer-options",title:"Anuncie no Facebook."},"Criar an\xfancio"),r.a.createElement("a",{href:"https://www.facebook.com/pages/create/?ref_type=site_footer",class:"footer-options",title:"Criar uma P\xe1gina"},"Criar P\xe1gina"),r.a.createElement("a",{href:"https://developers.facebook.com/?ref=pf",class:"footer-options",title:"Desenvolver em nossa plataforma."},"Desenvolvedores"),r.a.createElement("a",{href:"https://www.facebook.com/careers/?ref=pf",class:"footer-options",title:"D\xea um passo adiante na sua carreira em nossa incr\xedvel empresa."},"Carreiras"),r.a.createElement("a",{href:"https://www.facebook.com/privacy/explanation",class:"footer-options",title:"Saiba mais sobre sua privacidade e o Facebook."},"Privacidade"),r.a.createElement("a",{href:"https://www.facebook.com/policies/cookies/",class:"footer-options",title:"Saiba mais sobre cookies e o Facebook"},"Cookies"),r.a.createElement("a",{href:"https://www.facebook.com/help/568137493302217",class:"footer-options",title:"Saiba mais sobre as Op\xe7\xf5es de an\xfancio."}," ","Op\xe7\xf5es de an\xfancio",r.a.createElement("i",{class:"btn-info"})),r.a.createElement("a",{href:"https://www.facebook.com/policies?ref=pf",class:"footer-options",title:"Leia os nossos termos e pol\xedticas."},"Termos"),r.a.createElement("a",{href:"https://www.facebook.com/help/?ref=pf",class:"footer-options",title:"Acesse nossa Central de Ajuda."},"Ajuda")),r.a.createElement("div",{class:"copywrite"},r.a.createElement("span",null," Facebook \xa9 2020")))))},S=(t(40),function(){return r.a.createElement("div",{style:{backgroundColor:"whitesmoke"}},r.a.createElement("div",{className:"App"},r.a.createElement(i,null)),r.a.createElement("div",{className:"container-lg"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/sobre",component:v}),r.a.createElement(m.a,{exact:!0,path:"/ShowRoom",component:d}),r.a.createElement(m.a,{exact:!0,path:"/project/facebook",component:k}),r.a.createElement(m.a,{exact:!0,path:"/home",component:d}),r.a.createElement(m.a,{exact:!0,path:"/github",component:f}),r.a.createElement(m.a,{exact:!0,path:"/project",component:h}),r.a.createElement(m.a,{exact:!0,component:g}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(10),j=t(23),L=t(24),N=t(26),O=t(3);t(25);var x={data:[],productsLoading:!0},C={name:""},P={resume:"Estou cursando a Trybe e venho me aperfei\xe7oando a cada dia mais em desenvolvimento e\n  softskills. Hoje sou muito confiante e me sinto muito preparado para exercer a minha\n  fun\xe7\xe3o. Atualmente procuro uma vaga como Desenvolvedor Front-End, por\xe9m em 6 meses\n  aproximadamente me formarei como Full-Stack. Estou a procura de algo que venha me agregar\n  mais conhecimento e que eu possa agregar com o meu servi\xe7o.",objetive:" - Meu objetivo \xe9 me tornar um profissional excepcional na minha \xe1rea, para agregar valor a\n  todos ao meu redor. Atualmente sou Desenvolvedor Front-End, estou cursando Back-End e em\n  breve serei considerado Full-Stack, formado pela Trybe.",skills:[{name:"Git",status:" SKILLED"},{name:"Github",status:" SKILLED"},{name:"HTML Sem\xe2ntico",status:" SKILLED"},{name:"CSS Responsivo",status:" SKILLED"},{name:"Javascript",status:" SKILLED"},{name:"ES6",status:" SKILLED"},{name:"Testes unit\xe1rios",status:" SKILLED"},{name:"TDD",status:" SKILLED"},{name:"Jest",status:" SKILLED"},{name:"React",status:" SKILLED"},{name:"Redux",status:" SKILLED"},{name:"Hooks",status:" SKILLED"},{name:"ContextAPI",status:" SKILLED"},{name:"Metologias \xe1geis",status:" SKILLED"},{name:"SQL",status:"ON PROGRESS"},{name:"MongoDB",status:"ON PROGRESS"},{name:"NodeJS",status:"COMING SOON"},{name:"Deploy",status:"COMING SOON"},{name:"Python",status:"COMING SOON"}]},D={repos:[],loading:!1},I={loading:!1,projetos:[{name:"Facebook Project",type:"Trybe Project",style:"CSS / HTML",describe:"Projeto realizado no inicio do curso, a ideia do projeto era refazer a pagina inicial do Facebook utilizando HTML / CSS.\n      Foi utilizado Bootstrap 4.5, CSS feito a m\xe3o e HTML para o projeto.",done:!0,url:"project/facebook"}]},R=Object(y.combineReducers)({SearchInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_NAME":return Object(O.a)(Object(O.a)({},e),{},{name:a.name});default:return e}},dataCart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"API_REQUEST_DATA":return Object(O.a)(Object(O.a)({},e),{},{productsLoading:!0});case"API_REQUEST_DATA_SUCESS":return Object(O.a)(Object(O.a)({},e),{},{data:[].concat(Object(N.a)(e.data),[a.data]),productsLoading:!1});default:return e}},about:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ALL_SKILLS":return Object(O.a)({},e);default:return e}},reducerRepositories:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"CALL_REPOS":return Object(O.a)({},e);case"CALL_REPOS_SUCESS":return Object(O.a)(Object(O.a)({},e),{},{repos:a.repos,loading:!0});default:return e}},projetos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SHOW_PROJECTS":return Object(O.a)(Object(O.a)({},e),{},{loading:a.loading});default:return e}}}),F=Object(y.createStore)(R,Object(L.composeWithDevTools)(Object(y.applyMiddleware)(j.a)));l.a.render(r.a.createElement(c.a,null,r.a.createElement(o.a,{store:F},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d6b50073.chunk.js.map