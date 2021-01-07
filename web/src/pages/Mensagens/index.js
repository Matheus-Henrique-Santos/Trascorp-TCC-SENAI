import React from "react";

import Seta from './assets/arrow.svg';
import "./css/styles.css";
import { useHistory } from "react-router-dom";
import { signOut, getUsuario } from "../../services/security";
const UsuarioSessao = getUsuario();

const Mensagens = () => {
  const history = useHistory();
  return (
    <section className="section-container-inicio-cliente">
      {/* Coluna esquerda */}
      <div className="div-coluna-esquerda-inicio-cliente">
        <div className="div-foto-inicio-cliente"></div>
        <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/inicioCliente") }}>Perfil</span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarSolicitacao") }}>
          Criar solicitação
                </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/orcamento") }}>
          Criar orcamento
                </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/mensagens") }}>
          Mensagens
                </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/feedSolicitacoes") }}>
          Solicitações de Frete
                </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/feedVeiculos") }}>
          Veículos
                </span>
        <span className="span-itens-menu-inicio-cliente"
          onClick={() => {
            signOut();
            history.replace("/");
          }}>Sair</span>
      </div>
      <section className="section-container-mensagens">
        <div className="div-card-mensagens">
          <div className="div-titulo-mensagens">
            Mensagens
              </div>
          <div className="div-container-lista-mensagens">

          </div>
        </div>
        <div className="div-voltar-mensagens">
          <img src={Seta} alt="Voltar" onClick={() => { history.push("/inicioCliente") }} className="img-voltar-lista-mensagens" />
        </div>
      </section>
    </section>
  );
}

export default Mensagens;
