import React from "react";

import "./css/styles.css";

function estrutura({children}){
    return(
        <div className="divContainerEstruturaModulo">
            {/* Coluna esquerda */}
            <div className="divColunaEsquerdaEstruturaModulo">
                <div className="divConatainerFotoInicioCliente">

                </div>
                <p className="pNomeInicioCliente">Nome Sobrenome</p>
                <p className="pPerfilSolicitarSairInicioCliente">Perfil</p>
                <p className="pPerfilSolicitarSairInicioCliente">Criar solicitação</p>
                <p className="pPerfilSolicitarSairInicioCliente">Sair</p>
            </div>
            {/* Coluna direita */}
            <div className="divColunaDireitaEstruturaModulo">
                {children}
            </div>
        </div>
    );
}

export default estrutura;