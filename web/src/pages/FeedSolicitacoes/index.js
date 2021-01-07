import React from 'react';
import fotoPerfil from "./assets/foto_perfil.png";
import { api } from "../../services/api";
import moment from "moment";
import { signOut, getUsuario, getPerfil } from "../../services/security";
import './css/index.css';
import './css/styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function FeedSolicitacoes({ children }) {

    const history = useHistory();
    const UsuarioSessao = getUsuario();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const carregarPostagens = async () => {
            try {
                const retorno = await api.get("/solicitacoes");
                setPosts(retorno.data);
            } catch (e) {
                console.error(e)
            }
        }

        carregarPostagens();
    }, []);

    const handlerPerfil = () => {
        if (getPerfil() === "motorista") {

            history.push("/inicioMotorista")
        } else {
            history.push("/inicioCliente")

        }
    }

    return (
        <section className="section-container-inicio-cliente">
            {/* Coluna esquerda */}
            <div className="div-coluna-esquerda-inicio-cliente">
                <div className="div-foto-inicio-cliente">
                    <img src={getUsuario().imagem} width="50" />
                </div>
                <span className="span-nome-inicio-cliente">{UsuarioSessao.nome}</span>
                <span className="span-itens-menu-inicio-cliente" onClick={handlerPerfil}>Perfil</span>
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
            {/* Coluna direita */}
            <div className="divColunaDireitaEstruturaModulo">
                {children}
                {/*feed */}
                <section>
                    {posts.map((post) => (
                        <div className="card" style={{ margin: "0 auto" }}>
                            <div className="containerFeed">
                                <header className="row">
                                    <div>
                                        <div className="card-image">
                                            <img className="left fotoPerfil circle center" src={fotoPerfil} alt="Foto de perfil" />
                                            <strong className="col s3">
                                                por {" "}
                                                {post.Cliente.id === UsuarioSessao.clienteId ? " você" : post.Cliente.nome}                                            </strong>
                                            <p className="right">
                                                {moment(post.createdAt)
                                                    .locale("America/Sao_Paulo")
                                                    .format("DD/MM/YYYY HH:mm")}
                                            </p>
                                        </div>
                                    </div>
                                </header>
                                <div className="row card-content center">
                                    <h4 className="col s12 card-title">{post.titulo}</h4>
                                    {post.imagem && <img className="col s12 center fotoSolicitacao" src={post.imagem} alt="imagem do post" />}
                                    <p className="flow-text center">{post.descricao}</p>
                                </div>
                                <footer className="row card-action center">
                                    <button type="submit" className=" col s12 btn btn-large center waves-effect waves-light btnFeedSolicitacoes" name="action" onClick={() => { history.push("/valorOrcamento") }}>
                                        Dar orçamento
                                </button>
                                </footer>
                            </div>
                        </div>

                    ))}

                </section>
            </div>
        </section>
    )
}

export default FeedSolicitacoes;