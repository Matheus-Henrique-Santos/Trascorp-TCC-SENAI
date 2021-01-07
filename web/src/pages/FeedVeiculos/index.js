import React from 'react';
import fotoPerfil from "./assets/foto_perfil.png";
import { api } from "../../services/api";
import moment from "moment";
import { signOut, getUsuario } from "../../services/security";
import './css/index.css';
import './css/styles.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function FeedVeiculos({ children }) {

    const history = useHistory();
    const UsuarioSessao = getUsuario();

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const carregarPostagens = async () => {
            try {
                const retorno = await api.get("/postagens");

                setPosts(retorno.data);
            } catch (e) {
                console.error(e)
            }
        }

        carregarPostagens();
    }, []);

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
                {/* // feed */}
                <section>
                    {posts.map((post) => (
                        <div className="card">
                            <div className="containerFeed">
                                <header className="row">
                                    <div>
                                        <div className="card-image">
                                            <img className="left fotoPerfil circle center" src={fotoPerfil} alt="Foto de perfil" />
                                            <strong className="col s3">
                                                por {" "}
                                                {post.Motorista.id === UsuarioSessao.motoristaId ? " você" : post.Motorista.nome}
                                            </strong>
                                            <p className="right">
                                                {moment(post.createdAt)
                                                    .locale("America/Sao_Paulo")
                                                    .format("DD/MM/YYYY HH:mm")
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </header>
                                <div className="row card-content center">
                                    <h4 className="col s12 card-title">{post.titulo}</h4>
                                    <img className="col s12 center fotoVeiculos" src={post.imagem} alt="Imagem do veículo" />
                                    <p className="flow-text left">{post.descricao}</p>
                                </div>
                                <footer className="row card-action center">
                                    <button className=" col s12 btn center btn-large waves-effect waves-light btnFeedVeiculos" onClick={() => { history.push("/orcamento") }}>
                                        Contratar
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

export default FeedVeiculos;