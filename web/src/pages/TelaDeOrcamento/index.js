import React, { useState } from 'react';

import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { signIn, signOut, getUsuario } from "../../services/security";

import { format } from 'date-fns';

import {
  dataMask
} from '../../masks/masks'


import "./styles.css"

const Orcamento = () => {
  const UsuarioSessao = getUsuario();
  const history = useHistory();
  const [orcamentoController, setOrcamentoController] = useState({
    data: "",
    hora: "",
    enderecoPartida: "",
    enderecoEntrega: "",
    item: "",
    descricao: ""
  });

  const registrar = async (e) => {
    e.preventDefault();

    const [day, month, year] = orcamentoController.data.split("/");
    const dataFormatada = format(new Date(year, month - 1, day), "yyyy-MM-dd");

    try {
      const retorno = await api.post("/orcamento", orcamentoController,
        { data: dataFormatada });
      if (retorno.status === 201) {
        return history.replace("/posOrcamento");
      }
    } catch (erro) {
      if (erro.response) {
        return window.alert(erro.response.data.erro);
      }
      window.alert("Ops, algo deu errado. Tente novamente!");
    }
  };

  const handlerInput = (e) => {
    setOrcamentoController({ ...orcamentoController, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={registrar}>
      <section className="section-container-inicio-cliente">
        {/* Coluna esquerda */}
        <div className="div-coluna-esquerda-inicio-cliente">
          <div className="div-foto-inicio-cliente"></div>
          <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
          <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/inicioCliente") }}>Perfil</span>
          <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarSolicitacao") }}>
            Criar solicitação
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
        <div className="containerOrcamento" style={{ width: "100vw", height: "99vh", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="cardOrcamento">
            <div className="formulario white-text">
              <h4>Formulario de orçamento</h4>

            </div>
            <div className="input-field">
              <label for="dataHora">Data de retirada</label>
              <input type="text" id="data" class="datepicker"
                value={dataMask(orcamentoController.data)}
                onChange={handlerInput}
                maxLength="10"
                required />
            </div>
            <div className="input-field">
              <label for="dataHora">Horario de retirada</label>
              <input type="text" id="hora"
                value={orcamentoController.hora}
                onChange={handlerInput}
                required />
            </div>
            <div className="input-field">
              <label for="EnderecoPartida">Endereço de partida</label>
              <input type="text" id="enderecoPartida"
                value={orcamentoController.enderecoPartida}
                onChange={handlerInput}
                required />
            </div>
            <div className="input-field">
              <label for="EnderecoEntrega">Endereço de chegada</label>
              <input type="text" id="enderecoEntrega"
                value={orcamentoController.enderecoEntrega}
                onChange={handlerInput}
                required />
            </div>
            <div className="input-field">
              <label for="Item">Item</label>
              <input type="text" id="item"
                value={orcamentoController.item}
                onChange={handlerInput}
                required />
            </div>
            <div className="input-field">
              <label for="Descrição">Descriçao</label>
              <input type="text" id="descricao"
                value={orcamentoController.descricao}
                onChange={handlerInput}
                required />
            </div>

            <div className="input-field center-align">
              <button className="botao waves-effect waves-light">
                Criar orçamento
              </button>
            </div>
          </div>
        </div>
      </section>
    </form>
  )
};

export default Orcamento

