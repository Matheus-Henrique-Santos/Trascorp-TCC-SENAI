import React, { useRef, useState } from 'react';

import "./css/styles.css";
import { useHistory } from "react-router-dom";
import { signOut, getUsuario, signIn } from "../../../services/security";
import { api } from "../../../services/api";

const Postagem = () => {
    const UsuarioSessao = getUsuario();
    const history = useHistory();
    const [postagemController, setPostagemController] = useState({
        titulo: "",
        descricao: "",
    });

    const imgRef = useRef();

    const [imagem, setImagem] = useState(null);

    const registrar = async (e) => {
        e.preventDefault();

        const dados = new FormData();

        dados.append("titulo", postagemController.titulo);
        dados.append("descricao", postagemController.descricao);
        dados.append("imagem", imagem);

        try {
            const retorno = await api.post("/postagens",
                dados,
                {
                    headers: {
                        "Content-type": `multipart/form-data`,
                    }
                });
            if (retorno.status === 201) {
                //vai logar na aplicação e redirecionar para a tela home
                return history.replace("/feedVeiculos");
            }
        } catch (erro) {
            if (erro.response) {
                return window.alert(erro.response.data.erro);
            }
            window.alert("Ops, algo deu errado. Tente novamente!");
        }
    };

    const handlerInput = (e) => {
        setPostagemController({ ...postagemController, [e.target.id]: e.target.value });
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
            <section className="section-container-inicio-cliente">
                {/* Coluna esquerda */}
                <div className="div-coluna-esquerda-inicio-cliente">
                    <div className="div-foto-inicio-cliente"></div>
                    <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
                    <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/inicioCliente") }}>Perfil</span>
                    <span className="span-itens-menu-inicio-cliente" onClick={() => { history.push("/criarSolicitacao") }}>
                        Criar solicitação
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
                <div className="divCardOrcamento">
                    <div className="divTituloFormularioSolicitacao white-text">
                        <p className="pTituloFormularioSolicitacao"> Criar Postagem</p>
                    </div>
                    <div className="form-field">
                        <label for="Item">Titulo</label>
                        <input type="text"
                            id="titulo"
                            className="textoInput"
                            value={postagemController.titulo}
                            onChange={handlerInput} />
                    </div>
                    <div className="form-field">
                        <label for="Descrição">Descrição</label>
                        <input type="text"
                            id="descricao"
                            className="textoInput"
                            value={postagemController.descricao}
                            onChange={handlerInput} />
                    </div>
                    <form action="#">
                        <div class="file-field input-field">
                            <div class="btn botao waves-effect waves-light input-foto-motorista">
                                <span>Foto Postagem</span>
                                <input type="file"
                                    id="imagem"
                                    onChange={handlerImagem} />
                            </div>
                            <img style={{ width: "350px", marginLeft: "25px", marginTop: "10px", maxHeight: "300px" }} alt="preview" ref={imgRef} />
                            <div class="file-path-wrapper">
                                <input class="file-path validate" type="text" />
                            </div>
                        </div>
                    </form>
                    <div className="form-field center-align divContainerBotoesFormularioSolicitacao">
                        <div className="divContainerBotoesFormularioSolicitacao">
                            <button className="divBotoesFormulariosSolicitacao botaoFormularioCancelar" onClick={() => { history.push("/feedVeiculos") }}>
                                Cancelar
                            </button>
                            <button className="divBotoesFormulariosSolicitacao botaoFormularioSolicitar" onClick={() => { history.push("/feedVeiculos") }} >
                                Enviar
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </form>
    )
}

export default Postagem;