import React, { useState, useRef } from 'react';

import { useHistory } from "react-router-dom";
import { signIn } from "../../services/security";
import { api } from "../../services/api";
import { format } from 'date-fns'
import { cpfMask, cnpjMask, phoneMask, cepMask, dataMask } from '../../masks/masks';

import "./css/styles.css";

function CadastroMotorista() {

  const history = useHistory();
  const [motoristaController, setMotoristaController] = useState({
    nome: "",
    dataNascimento: "",
    cpf: "",
    cep: "",
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

    dados.append("nome", motoristaController.nome);
    dados.append("data_nascimento", motoristaController.dataNascimento);
    dados.append("cpf", motoristaController.cpf);
    dados.append("cnpj", motoristaController.cnpj);
    dados.append("email", motoristaController.email);
    dados.append("senha", motoristaController.senha);
    dados.append("celular", motoristaController.celular);
    dados.append("foto_motorista", imagem);

    const [day, month, year] = motoristaController.dataNascimento.split("/");

    const dataFormatada = format(new Date(year, month - 1, day), "yyyy-MM-dd");

    try {
      const retorno = await api.post("/motorista",
        dados,
        { dataNascimento: dataFormatada },
        {
          headers: {
            "Content-type": `multipart/form-data`,
          }
        });
      if (retorno.status === 201) {
        //vai logar na aplicação e redirecionar para a tela home
        signIn(retorno.data);
        return history.replace("/inicioMotorista");
      }
    } catch (erro) {
      if (erro.response) {
        return window.alert(erro.response.data.erro);
      }
      window.alert("Ops, algo deu errado. Tente novamente!");
    }
  };

  const handlerInput = (e) => {
    setMotoristaController({ ...motoristaController, [e.target.id]: e.target.value });
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
      <section className="section-container-cadastro-motorista">
        <div className="div-card-cadastro-motorista">
          <div className="cardCadastro">
            <div className="div-titulo-cadastro-motorista">
              Cadastro de motoristas
        </div>
            <div className="input-field">
              <label for="Nome">Nome completo</label>
              <input
                value={motoristaController.nome}
                onChange={handlerInput}
                required
                type="text"
                id="nome" />
            </div>
            <div className="input-field">
              <label for="dataHora">Data de nascimento</label>
              <input
                value={dataMask(motoristaController.dataNascimento)}
                onChange={handlerInput}
                required
                type="text"
                id="dataNascimento"
                maxLength="10" />
            </div>
            <div className="input-field">
              <label for="EnderecoPartida">CPF</label>
              <input
                value={cpfMask(motoristaController.cpf)}
                onChange={handlerInput}
                type="text"
                id="cpf"
                maxLength="14"
                required />
            </div>
            <div className="input-field">
              <label for="Cnpj">CNPJ</label>
              <input
                value={cnpjMask(motoristaController.cnpj)}
                onChange={handlerInput}
                type="text"
                id="cnpj"
                required />
            </div>
            <div className="input-field">
              <label for="EnderecoChegado">E-mail</label>
              <input
                value={(motoristaController.email)}
                onChange={handlerInput}
                type="text"
                id="email"
                required />
            </div>
            <div className="input-field">
              <label for="Item">Senha</label>
              <input
                value={motoristaController.senha}
                onChange={handlerInput}
                type="password"
                id="senha"
                required />
            </div>
            <div className="input-field">
              <label for="Celular">Celular</label>
              <input
                value={phoneMask(motoristaController.celular)}
                onChange={handlerInput}
                type="text"
                id="celular"
                required />
            </div>
            <div className="input-field">
              <label for="Descrição">Cep</label>
              <input
                value={cepMask(motoristaController.cep)}
                onChange={handlerInput}
                required
                type="text"
                id="cep" />
            </div>
            <form action="#">
              <div class="file-field input-field">
                <div class="btn botao waves-effect waves-light input-foto-motorista">
                  <span>Foto Motorista</span>
                  <input type="file"
                    id="fotoMotorista"
                    onChange={handlerImagem} />
                </div>
                <img style={{ width: "400px", marginLeft: "25px", marginTop: "10px", maxHeight: "500px" }} alt="preview" ref={imgRef} />
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
              <button className="div-botoes-voltar-cadastrar" style={{ color: "white" }}>
                Registrar-se
            </button>
            </div>
          </div>
        </div>
      </section>
    </form >
  )
};

export default CadastroMotorista;

