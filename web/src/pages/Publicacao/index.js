import React from 'react';

import "./css/styles.css";

function Publicacao(){
    return(
        <section className="section-container-solicitacao">
            <div className="div-card-orcamento">
                <div className="div-titulo-formulario-solicitacao">
                    <p className="p-titulo-formulario-solicitacao">Solicite uma cotação</p>
                </div>
                <div className="form-field">
                    <label for="dataHora">Data de retirada</label>
                    <input type="text" id="username" className="textoInput"/>
                </div>
                <div className="form-field">
                    <label for="dataHora">Horário de retirada</label>
                    <input type="text" id="username" className="textoInput"/>
                </div>
                <div className="form-field">
                    <label for="EnderecoPartida">Endereço de partida</label>
                    <input type="text" id="username" className="textoInput"/>
                </div>
                <div className="form-field">
                    <label for="EnderecoChegada">Endereço de chegada</label>
                    <input type="text" id="username" className="textoInput"/>
                </div>
                <div className="form-field">
                    <label for="Item">Item</label>
                    <input type="text" id="username" className="textoInput"/>
                </div>
                <div className="form-field">
                    <label for="Descrição">Descrição</label>
                    <input type="text" id="username" className="textoInput"/>
                </div>
                <div className="form-field center-align div-container-botoes-formulario-solicitacao">
                    <div className="div-container-botoes-formulario-solicitacao">
                        <div className="div-botoes-formularios-solicitacao botao-formulario-cancelar">
                            Cancelar
                        </div>
                        <div className="div-botoes-formularios-solicitacao botao-formulario-solicitar">
                            Solicitar
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Publicacao;