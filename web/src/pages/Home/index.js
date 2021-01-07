import React, { useState } from 'react';

import { useHistory } from "react-router-dom";
import { api } from '../../services/api';
import { signIn } from '../../services/security';

import Capa from './assets/animacao.gif';
import FaleConosco from './assets/fale_conosco.png';
import Valores from './assets/valores.png';
import Missao from './assets/missao.png';
import Visao from './assets/visao.png';

import "./css/styles.css";

import Footer from '../footer/index';

function Home() {

  const history = useHistory();

  //inicializa a variável de estado com os campos do formulário
  const [clienteLogin, setClienteLogin] = useState({
    email: "",
    senha: ""
  });

  const entrar = async (e) => {
    e.preventDefault();
    try {
      const retorno = await api.post("/sessao", clienteLogin);
      if (retorno.status === 201) {
        //vai logar na aplicação e redirecionar para a tela home
        //com o signIn tenho o json do login, todos os dados
        signIn(retorno.data);
        const { usuarioPerfil } = retorno.data.usuario;

        console.log(usuarioPerfil)

        if (usuarioPerfil === "motorista") {
          return history.replace("/inicioMotorista");
        } else {
          return history.replace("/inicioCliente");
        }
      }
    } catch (erro) {
      if (erro.response) {
        return window.alert(erro.response.data.erro);
      }
      console.log(erro);
      window.alert("Ops, algo deu errado. Tente novamente!");
    }
  };

  const handlerInput = (e) => {
    setClienteLogin({ ...clienteLogin, [e.target.id]: e.target.value });
  };

  return (
    <section className="section-container-home">
      <header className="header-home" style={{ position: "fixed" }}>
        <div className="div-container-logo-home">TransCorp</div>
        <div className="div-container-menu-itens-home">
          <div className="div-botoes-menu-itens-home">
            <p className="p-itens-menu-home"><a href="#home" style={{ color: "white", listStyle: "none" }}>Início</a></p>
          </div>
          <div className="div-botoes-menu-itens-home">
            <p className="p-itens-menu-home"><a href="#sobre" style={{ color: "white", listStyle: "none" }}>Sobre</a></p>
          </div>
          <div className="div-botoes-menu-itens-home">
            <p className="p-itens-menu-home"><a href="#faleConosco" style={{ color: "white", listStyle: "none" }}>Contato</a></p>
          </div>
        </div>
        <div className="div-container-formulario-email-senha-home-desktop">
          <div className="input-fields inline mrg div-formulario-email-senha-home-desktop">
            <input
              placeholder="Insira seu e-mail"
              required
              id="email"
              value={clienteLogin.email}
              onChange={handlerInput}
              type="email"
              style={{ color: "white", height: "30px", marginTop: "1.5vh" }}
              className="validate" />
          </div>
          <div className="input-fields inline mrg div-formulario-email-senha-home-desktop">
            <input
              placeholder="Insira sua senha"
              required
              id="senha"
              value={clienteLogin.senha}
              onChange={handlerInput}
              type="password"
              style={{ color: "white", height: "30px", marginTop: "1.5vh" }}
              className="validate" />
          </div>
        </div>
        <div className="div-container-botoes-entrar-cadastrar-home-desktop">
          <div className="div-botoes-entrar-cadastrar-home-desktop">
            <span className="span-conteudo-botoes-entrar-cadastrar-desktop"
              type="submit"
              name="action"
              onClick={entrar}>
              Entrar
            </span>
          </div>
          <div className="div-botoes-entrar-cadastrar-home-desktop">
            <span className="span-conteudo-botoes-entrar-cadastrar-desktop"
              type="submit"
              name="action2"
              onClick={() => {
                history.push("/tipoDeCadastro")
              }}>
              Cadastrar
            </span>
          </div>
        </div>
      </header>
      <div className="div-container-login-registrar-home">
        <div className="div-container-descricao-home-telas-medias">
          <span className="span-titulo-descricao-home-telas-medias">
            Precisa de uma entrega?
          </span>
          <span className="span-descricao-home-telas-medias">
            Encontre um transportador
          </span>
          <span className="span-slogan-home-telas-medias">
            De pequenas entregas à grandes mudanças
          </span>
        </div>
        <div className="div-formulario-login-cadastrar-home input-fields inline mrg">
          <div className="div-titulo-formulario-login-cadastrar-home">
            Acesse ou cadastre-se
          </div>
          <input
            placeholder="Insira seu e-mail"
            required
            id="email"
            value={clienteLogin.email}
            onChange={handlerInput}
            type="email"
            style={{ color: "white", height: "30px", marginTop: "1.5vh" }}
            className="validate"
          />
          <input
            placeholder="Insira sua senha"
            required
            id="senha"
            value={clienteLogin.senha}
            onChange={handlerInput}
            type="password"
            style={{ color: "white", height: "30px", marginTop: "1.5vh" }}
            className="validate"
          />
          <div className="div-container-botoes-login-registrar-home">
            <div className="div-botoes-entrar-cadastrar-home-desktop">
              <span className="span-conteudo-botoes-entrar-cadastrar-desktop"
                type="submit"
                name="action"
                onClick={entrar}>
                Entrar
            </span>
            </div>
            <div className="div-botoes-login-registrar-home">Cadastrar</div>
          </div>
        </div>
      </div>
      <div className="div-container-texto-descricao-home">
        <span className="span-titulo-descricao-home">
          Precisa de uma entrega?
        </span>
        <span className="span-descricao-home">Encontre um transportador</span>
        <span className="span-slogan-home">
          De pequenas entregas à grandes mudanças
        </span>
      </div>
      <div className="div-container-imagem-e-texto-descricao-home-desktop" id="home">
        <div className="div-texto-descricao-home-desktop">
          <span className="span-titulo-descricao-home">
            Precisa de uma entrega?
          </span>
          <span className="span-descricao-home">Encontre um transportador</span>
          <span className="span-slogan-home">
            De pequenas entregas à grandes mudanças
          </span>
        </div>
        <div className="div-imagem-descricao-home-desktop">
          <img src={Capa} className="imagem-capa" alt="Capa" />
        </div>
      </div>
      <div className="div-container-sobre-home">
        {/* <div className="div-titulo-container-sobre-home">
                    Sobre
                </div> */}
        <div className="div-imagens-sobre-home">
          <img
            src={Missao}
            className="imagem-missao-visao-valores"
            alt="Missão"
          />
        </div>
        <div className="div-container-texto-sobre-home">
          <p className="p-sobre-home">
            Disponibilizar aplicações web e mobile, descomplicar a contratação de transportes.
          </p>
        </div>
        <div className="div-imagens-sobre-home">
          <img
            src={Visao}
            className="imagem-missao-visao-valores"
            alt="Visão"
          />
        </div>
        <div className="div-container-texto-sobre-home">
          <p className="p-sobre-home">
            Disponibilizar uma aplicação referência no serviço de transportes.
          </p>
        </div>
        <div className="div-imagens-sobre-home">
          <img
            src={Valores}
            className="imagem-missao-visao-valores"
            alt="Valores"
          />
        </div>
        <div className="div-container-texto-sobre-home">
          <p className="p-sobre-home">
              Transparência
              Confiabilidade
              Inovação
          </p>
        </div>
      </div>
      <div className="div-container-sobre-home-telas-medias">
        {/* <div className="div-container-titulo-sobre-home-telas-medias">
                    Sobre
                </div> */}
        <div className="div-container-itens-sobre-home-telas-medias">
          <div className="div-imagens-sobre-home">
            <img
              src={Missao}
              className="imagem-missao-visao-valores"
              alt="Missão"
            />
          </div>
          <div className="div-container-texto-sobre-home">
            Disponibilizar aplicações web e mobile, descomplicar a contratação de transportes.
          </div>
          <div className="div-imagens-sobre-home">
            <img
              src={Visao}
              className="imagem-missao-visao-valores"
              alt="Visão"
            />
          </div>
          <div className="div-container-texto-sobre-home">
            Disponibilizar uma aplicação referência no serviço de transportes.
          </div>
          <div className="div-imagens-sobre-home">
            <img
              src={Valores}
              className="imagem-missao-visao-valores"
              alt="Valores"
            />
          </div>
          <div className="div-container-texto-sobre-home">
              Transparência
              Confiabilidade
              Inovação
          </div>
        </div>
      </div>
      <div className="div-container-sobre-home-desktop" id="sobre">
        {/* <div className="div-titulo-sobre-home-desktop">
                    Sobre
                </div> */}
        <div className="div-container-itens-sobre-home-desktop">
          <div className="div-imagens-sobre-home">
            <img
              src={Missao}
              className="imagem-missao-visao-valores"
              alt="Missão"
            />
          </div>
          <div className="div-container-texto-sobre-home">
            Disponibilizar aplicações web e mobile, descomplicar a contratação de transportes.
          </div>
          <div className="div-imagens-sobre-home">
            <img
              src={Visao}
              className="imagem-missao-visao-valores"
              alt="Visão"
            />
          </div>
          <div className="div-container-texto-sobre-home">
            Disponibilizar uma aplicação referência no serviço de transportes.
          </div>
          <div className="div-imagens-sobre-home">
            <img
              src={Valores}
              className="imagem-missao-visao-valores"
              alt="Valores"
            />
          </div>
          <div className="div-container-texto-sobre-home">
              Transparência
              Confiabilidade
              Inovação
          </div>
        </div>
      </div>
      <div className="div-container-fale-conosco-home">
        {/* <div className="div-titulo-container-fale-conosco-home">
                    Fale conosco
                </div> */}
        <div className="div-imagem-fale-conosco-home">
          <img
            src={FaleConosco}
            className="imagem-fale-conosco"
            alt="Fale conosco"
          />
        </div>
        <div className="div-container-formulario-fale-conosco">
          <div className="input-field">
            <input id="nome" type="text" className="validate" />
            <label for="nome">Nome</label>
          </div>
          <div className="input-field">
            <input id="telefone" type="text" className="validate" />
            <label for="telefone">Telefone</label>
          </div>
          <div className="input-field">
            <input id="celular" type="text" className="validate" />
            <label for="celular">Celular</label>
          </div>
          <div className="input-field">
            <input id="email" type="text" className="validate" />
            <label for="email">E-mail</label>
          </div>
          <label className="left">Selecione o sexo:</label>
          <select className="browser-default col s12 center">
            <option value="1" disabled selected>
              Masculino
            </option>
            <option value="2">Feminino</option>
            <option value="3">Prefiro não informar</option>
          </select>
          <div className="input-field">
            <input id="mensagem" type="text" className="validate" />
            <label for="mensagem">Mensagem</label>
          </div>
          <div className="div-container-botao-enviar-mensagem-fale-conosco">
            <div
              className="div-botao-enviar-mensagem-fale-conosco"
              type="submit"
              name="action"
            >
              Enviar
            </div>
          </div>
        </div>
      </div>
      <div className="div-container-fale-conosco-home-telas-medias">
        {/* <div className="div-titulo-container-fale-conosco-home">
                    Fale conosco
                </div> */}
        <div className="div-container-itens-fale-conosco-telas-medias">
          <div className="div-imagem-fale-conosco-home">
            <img
              src={FaleConosco}
              className="imagem-fale-conosco"
              alt="Fale conosco"
            />
          </div>
          <div className="div-container-formulario-fale-conosco">
            <div className="input-field">
              <input id="nome" type="text" className="validate" />
              <label for="nome">Nome</label>
            </div>
            <div className="input-field">
              <input id="telefone" type="text" className="validate" />
              <label for="telefone">Telefone</label>
            </div>
            <div className="input-field">
              <input id="celular" type="text" className="validate" />
              <label for="celular">Celular</label>
            </div>
            <div className="input-field">
              <input id="email" type="text" className="validate" />
              <label for="email">E-mail</label>
            </div>
            <label className="left">Selecione o sexo:</label>
            <select className="browser-default col s12 center">
              <option value="1" disabled selected>
                Masculino
              </option>
              <option value="2">Feminino</option>
              <option value="3">Prefiro não informar</option>
            </select>
            <div className="input-field">
              <input id="mensagem" type="text" className="validate" />
              <label for="mensagem">Mensagem</label>
            </div>
            <div className="div-container-botao-enviar-mensagem-fale-conosco">
              <div
                className="div-botao-enviar-mensagem-fale-conosco"
                type="submit"
                name="action"
              >
                Enviar
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div-container-fale-conosco-home-desktop" id="faleConosco">
        {/* <div className="div-titulo-container-fale-conosco-home-desktop">
                    Fale conosco
                </div> */}
        <div className="div-container-itens-fale-conosco-home-desktop">
          <div className="div-imagem-fale-conosco-home">
            <img
              src={FaleConosco}
              className="imagem-fale-conosco"
              alt="Fale conosco"
            />
          </div>
          <div className="div-container-formulario-fale-conosco">
            <div className="input-field">
              <input id="nome" type="text" className="validate" />
              <label for="nome">Nome</label>
            </div>
            <div className="input-field">
              <input id="telefone" type="text" className="validate" />
              <label for="telefone">Telefone</label>
            </div>
            <div className="input-field">
              <input id="celular" type="text" className="validate" />
              <label for="celular">Celular</label>
            </div>
            <div className="input-field">
              <input id="email" type="text" className="validate" />
              <label for="email">E-mail</label>
            </div>
            <label className="left">Selecione o sexo:</label>
            <select className="browser-default col s12 center">
              <option value="1" disabled selected>
                Masculino
              </option>
              <option value="2">Feminino</option>
              <option value="3">Prefiro não informar</option>
            </select>
            <div className="input-field">
              <input id="mensagem" type="text" className="validate" />
              <label for="mensagem">Mensagem</label>
            </div>
            <div className="div-container-botao-enviar-mensagem-fale-conosco">
              <div
                className="div-botao-enviar-mensagem-fale-conosco"
                type="submit"
                name="action"
              >
                Enviar
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="footer-home"></footer> */}
      <Footer />
    </section>
  );
}

export default Home;
