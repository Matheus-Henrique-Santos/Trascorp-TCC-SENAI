import React from "react";

import "./css/styles.css";

import Mapa from "../Modulos/mapa/index";


import { signOut, getUsuario } from "../../services/security";

import { useHistory } from "react-router-dom";

function InicioCliente() {
  const history = useHistory();
  const UsuarioSessao = getUsuario();
  return (
    <section className="section-container-inicio-cliente">
      {/* Coluna esquerda */}
      <div className="div-coluna-esquerda-inicio-cliente">
        <div className="div-foto-inicio-cliente"></div>
        <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/inicioCliente") }}>Perfil</span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarSolicitacao") }}>
          Criar Solicitação
        </span>
        <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarPostagem") }}>
          Criar postagem
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
      {/* Coluna direita */}
      <div className="div-coluna-direita-inicio-cliente">
        <Mapa />
      </div>
    </section>
  );
}

export default InicioCliente;
