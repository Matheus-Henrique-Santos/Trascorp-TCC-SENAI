import React from "react";

import "./css/styles.css";

import { useHistory } from "react-router-dom";

function TipoCadastro() {
    const history = useHistory();
    return (

        <div className="divContainerTipoCadastro">
            <div className="divCardsCadastro">
                <div className="divSouMotoristaCliente divSouMotorista"
                    onClick={() => {
                        history.replace("/cadastroMotorista")
                    }}>
                    Sou motorista
                </div>
                <div className="divSouMotoristaCliente divSouCliente"
                    onClick={() => {
                        history.replace("/cadastroCliente")
                    }}>
                    Sou cliente
                </div>
            </div>
        </div>
    );
}

export default TipoCadastro;