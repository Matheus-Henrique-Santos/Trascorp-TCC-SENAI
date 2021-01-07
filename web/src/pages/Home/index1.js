import React, { useState } from 'react';
import img from './assets/foto.jpg';
import "./styles.css";
import 'material-icons';
import { useHistory } from "react-router-dom";
import { api } from '../../services/api';
import { signIn } from "../../services/security";

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
        const { usuarioPerfil } = retorno.data;
        if (usuarioPerfil == "motorista") {
          return history.replace("/feedVeiculos");
        } else {
          return history.replace("/feedSolicitacoes");
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
    <div>
      <nav className="navb">
        <div className="nav-wrapper">
          <a href="#" className="logos">Transcorp</a>
          <ul id="nav-mobile" className="mrgs">
            <li><a>Home</a></li>
            <li><a>Sobre</a></li>
            <li><a>Fale Conosco</a></li>
          </ul>
          <ul id="nav-mobile" className="right">
            <li>
              <div className="input-fields inline mrg">
                <input placeholder="Insira seu e-mail"
                  required
                  id="email"
                  value={clienteLogin.email}
                  onChange={handlerInput}
                  type="email"
                  style={{ color: "white" }}
                  className="validate" />
              </div>
            </li>
            <li>
              <div className="input-fields inline mrg">
                <input placeholder="Insira sua senha"
                  required
                  id="senha"
                  type="password"
                  value={clienteLogin.senha}
                  style={{ color: "white" }}
                  className="validate"
                  onChange={handlerInput} />
              </div>
            </li>
            <li>
              <button className="waves-effect waves-light buttn"
                type="submit"
                name="action"
                onClick={entrar}
              >Entrar</button>
            </li>
            <li>
              <button className="waves-effect waves-light buttn"
                type="submit"
                name="action2"
                onClick={() => {
                  history.push("/tipoDeCadastro")
                }}>
                Cadastre-se
              </button>
            </li>
          </ul>
        </div>
        <div className="navb nav-content">
          <ul className="tabs tabs-transparent respn">
            <li className="tab"><a className="active" href="#test2">Home</a></li>
            <li className="tab"><a className="active" href="#test2">Sobre</a></li>
            <li className="tab"><a className="active" href="#test2">Fale Conosco</a></li>
          </ul>
        </div>
      </nav>
      <div>
        <section className="part1">
          <div className="containerHome row">
            <div className="col s6">
              <h1>Precisa de uma<br /> entrega?</h1>
              <h3>Encontre um transportador</h3>
              <p className="flow-text left">De pequenas entregas à grandes mudanças</p>
            </div>
            <img className="right col s6 imgPart1" src={img} alt="img" />
          </div>
        </section>
        <section className="part2">
          <div className="containerHome row center">
            <h1>Sobre</h1>
            <h3>Lorem ipsum dolor sit amet et delectus</h3>
            <div className="row">
              <div className="col s12">
                <div className="col s4">
                  <img src={img} alt="" className="imgPart2" />
                  <p className="flow-text">1Lorem ipsum dolor sit amet et delectus accommodare his
                    consul copiosae legendos at vix egendos at</p>
                </div>
                <div className="col s4">
                  <img src={img} alt="" className="imgPart2" />
                  <p className="flow-text">2Lorem ipsum dolor sit amet et delectus accommodare his
                    consul copiosae legendos at vix egendos at</p>
                </div>
                <div className="col s4">
                  <img src={img} alt="" className="imgPart2" />
                  <p className="flow-text">3Lorem ipsum dolor sit amet et delectus accommodare his
                    consul copiosae legendos at vix egendos at</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="part3">
          <div className="containerHome row center">
            <h1>Fale Conosco</h1>
            <div className="row">
              <div className="col s6">
                <img src={img} alt="" className="imgPart3" />
              </div>
              <div className="col s6 center formulario">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="nome" type="text" className="validate" />
                    <label for="nome">Nome</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder="(11) 5284-8516" id="telefone" type="text" className="validate" />
                    <label for="telefone">Telefone</label>
                  </div>
                  <div className="input-field col s6">
                    <input placeholder="(11) 95284-8516" id="celular" type="text" className="validate" />
                    <label for="celular">Celular</label>
                  </div>
                  <div className="input-field col s12">
                    <input id="email" type="text" className="validate" />
                    <label for="email">E-mail</label>
                  </div>
                  <label className="left">Selecione o sexo:</label>
                  <select className="browser-default col s12 center">
                    <option value="1" disabled selected>Masculino</option>
                    <option value="2">Feminino</option>
                    <option value="3">Prefiro não informar</option>
                  </select>
                  <div className="input-field col s6">
                    <input id="mensagem" type="text" className="validate" />
                    <label for="mensagem">Mensagem</label>
                  </div>
                  <div className="input-field col s6">
                    <button className="col s12 btn waves-effect waves-light btnEnviar"
                      type="submit"
                      name="action">
                      Enviar
                      <i className="material-icons right">send</i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer class="pgfooter">
        <div class="container">
          <div class="row">
            <div class="col l4">
              <h5 class="white-text">Transcorp</h5>
            </div>
            <div class="col l2 offset-l2 s12">
              <tr>
                <td>
                  <a class="btn-floating btn-large waves-effect waves-light white">
                    <img class="material-icons" width="40" />
                  </a>
                </td>
                <td>
                  <a class="btn-floating btn-large waves-effect waves-light white">
                    <img class="material-icons" width="40" />
                  </a>
                </td>
                <td>
                  <a class="btn-floating btn-large waves-effect waves-light white">
                    <img class="material-icons" width="40" />
                  </a>
                </td>
              </tr>
            </div>
          </div>
        </div>
        <div class="footer-copyright">
          <div class="container pdng">
            <h6 class="white-text mrgt">Endereco</h6>
          </div>
        </div>
      </footer>
    </div>
  )
};
export default Home;