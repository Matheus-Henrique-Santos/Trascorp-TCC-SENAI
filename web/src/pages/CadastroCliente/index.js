import React, { useState, useRef } from 'react';

import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";

import { format } from 'date-fns';
import "./css/styles.css"

import {
  cpfMask,
  cnpjMask,
  phoneMask,
  dataMask
} from '../../masks/masks'


const CadastroCliente = () => {
  const history = useHistory();
  const [clienteController, setClienteController] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    cnpj: "",
    email: "",
    senha: "",
    celular: ""
  });

  const imgRef = useRef();

  const [imagem, setImagem] = useState(null);

  const registrar = async (e) => {
    e.preventDefault();

    const dados = new FormData();

    dados.append("nome", clienteController.nome);
    dados.append("data_nascimento", clienteController.dataNascimento);
    dados.append("cpf", clienteController.cpf);
    dados.append("cnpj", clienteController.cnpj);
    dados.append("email", clienteController.email);
    dados.append("senha", clienteController.senha);
    dados.append("celular", clienteController.celular);
    dados.append("foto_cliente", imagem);

    const [day, month, year] = clienteController.dataNascimento.split("/");
    const dataFormatada = format(new Date(year, month - 1, day), "yyyy-MM-dd");

    try {
      const retorno = await api.post("/cliente", dados,
        { dataNascimento: dataFormatada },
        {
          headers: {
            "Content-type": `multipart/form-data`,
          }
        });
      if (retorno.status === 201) {
        //vai logar na aplicação e redirecionar para a tela home
        signIn(retorno.data);
        return history.replace("/inicioCliente");
      }
    } catch (erro) {
      if (erro.response) {
        return window.alert(erro.response.data.erro);
      }
      window.alert("Ops, algo deu errado. Tente novamente!");
    }
  };

  const handlerInput = (e) => {
    setClienteController({ ...clienteController, [e.target.id]: e.target.value });
  };

  const handlerImagem = (e) => {
    if (e.target.files[0]) {
      imgRef.current.src = URL.createObjectURL(e.target.files[0]);
      imgRef.current.style.display = "block;"
    } else {
      imgRef.current.src = "";
      imgRef.current.src = "";
    }
    setImagem(e.target.files[0]);
  };

  return (
    <form onSubmit={registrar}>
      <div className="section-container-cadastro-cliente">

        <div className="div-card-cadastro-cliente">
          <div className="cardCadastro">
            <div className="div-titulo-cadastro-cliente">
              Cadastro Cliente
            </div>
            <div className="input-field">
              <label for="dataHora">Nome completo</label>
              <input type="text" id="nome"
                value={clienteController.nome}
                onChange={handlerInput}
                // placeholder="Insira seu nome"
                required />
            </div>
            <div className="input-field">
              <label for="dataHora">Data de nascimento</label>
              <input type="text"
                id="dataNascimento"
                value={dataMask(clienteController.dataNascimento)}
                onChange={handlerInput}
                // placeholder="Insira sua data de nascimento"
                required
                maxLength="10" />
            </div>
            <div className="input-field">
              <label for="EnderecoPartida">CPF</label>
              <input type="text" id="cpf"
                value={cpfMask(clienteController.cpf)}
                onChange={handlerInput}
                // placeholder="Insira seu cpf"
                required
                maxLength="14" />
            </div>
            <div className="input-field">
              <label for="EnderecoPartida">CNPJ</label>
              <input type="text" id="cnpj"
                value={cnpjMask(clienteController.cnpj)}
                onChange={handlerInput}
                // placeholder="Insira seu CNPJ"
                required
              />
            </div>
            <div className="input-field">
              <label for="EnderecoChegado">E-mail</label>
              <input type="email" id="email"
                value={(clienteController.email)}
                onChange={handlerInput}
                // placeholder="Insira seu e-mail"
                required />
            </div>
            <div className="input-field">
              <label for="Item">Senha</label>
              <input type="password" id="senha"
                value={clienteController.senha}
                onChange={handlerInput}
                // placeholder="Insira sua senha"
                required />
            </div>
            <div className="input-field">
              <label for="Descrição">Celular</label>
              <input type="text" id="celular"
                value={phoneMask(clienteController.celular)}
                onChange={handlerInput}
                // placeholder="Insira seu celular"
                required />
            </div>

            <form action="#">
              <div class="file-field input-field">
                <div class="btn botao waves-effect waves-light  input-foto-cliente">
                  <span>Foto Cliente</span>
                  <input type="file"
                    id="fotoCliente"
                    onChange={handlerImagem} />
                </div>
                <img style={{ width: "400px", marginLeft: "25px", marginTop: "10px", maxHeight: "500px" }}
                  alt="preview" ref={imgRef} />
                <div class="file-path-wrapper">
                  <input class="file-path validate" type="text" />
                </div>
              </div>
            </form>
            <div className="div-container-botoes-voltar-cadastrar">
              <button className="div-botoes-voltar-cadastrar" style={{ color: "white" }}
                type="submit"
                name="action2"
                onClick={() => {
                  history.push("/tipoDeCadastro")
                }}>
                Voltar
            </button>
              <button className="div-botoes-voltar-cadastrar" style={{ color: "white" }}>Registrar-se
            </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
};
export default CadastroCliente;