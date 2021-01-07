import React from "react";

import "./css/styles.css";

import ImagemRecusar from './assets/recusar.svg';
import ImagemAceitar from './assets/aceitar.svg';

import { signOut, getUsuario } from "../../services/security";

import { useHistory } from "react-router-dom";

function InicioMotorista() {
  const history = useHistory();
  const UsuarioSessao = getUsuario();
    return (
        <section className="section-container-inicio-motorista">
            {/* Coluna esquerda */}
            <div className="div-coluna-esquerda-inicio-motorista">
                <div className="div-foto-inicio-motorista">

                </div>
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
            {/* Coluna direita */ }
    <div className="div-coluna-direita-inicio-motorista">
        <div className="div-titulo-feed-morista">
            Feed de solicitações
                </div>
        <div className="div-container-cards-solicitacao">
            <div className="div-card-solicitacao">
                <div className="div-coluna-esquerda-card-solicitacao">
                    Marcos Felipe solicitou um transporte
                        </div>
                <div className="div-coluna-direita-card-solicitacao">
                    <div className="div-detalhes-card-solicitacao">
                        <span className="span-detalhes-card-solicitacao" onClick={() => {history.push("/detalhes")}}>Detalhes</span>
                    </div>
                    <div className="div-container-botoes-aceitar-recusar-card-solicitacao">
                        <div className="div-botoes-aceitar-recusar-card-solicitacao">
                            <img src={ImagemRecusar} className="imagens-botoes-aceitar-recusar-card-solicitacao" alt="Recusar" />
                        </div>
                        <div className="div-botoes-aceitar-recusar-card-solicitacao">
                            <img src={ImagemAceitar} className="imagens-botoes-aceitar-recusar-card-solicitacao" alt="Aceitar" onClick={() => {history.push("/valorOrcamento")}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </section >
    );
}

export default InicioMotorista;