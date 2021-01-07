import React from 'react';

import { useHistory } from "react-router-dom";
import "./css/styles.css";

const Valor = () => {
    const history = useHistory();
    return(
        <div className="divContainerValor">
            <div className="divCardValor">
                <div className="divValorTitulo">
                    Qual o valor do transporte?
                </div>
                <div className="form-field">
                    <label for="dataHora">Informe o valor</label>
                    <input type="text" id="username" className="textoInput" placeholder="Padrão R$ 00,00"/>
                </div>
                <div className="divContainerBotoesEnviarCancelar">
                    <div className="divBotoesCancelarEnviar" onClick={() => { history.push("/feedSolicitacoes") }}>
                        Cancelar
                    </div>
                    <div className="divBotoesCancelarEnviar">
                        Enviar
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Valor;

