import React from 'react';

import "./css/styles.css";

import Whatsapp from './assets/whatsapp.svg';

function Resposta() {
  return (
    <section className="section-container-resposta">
      <div className="div-card-resposta">
        <div className="div-titulo-card-resposta">
          Resposta do motorista
        </div>
        <div className="div-container-resposta">
          <div className="div-container-itens-resposta">
            <span className="span-resposta-itens-titulo">Sua Solicitaçao foi aceita</span>
          </div>
          <div className="div-container-itens-resposta">
            <span className="span-resposta-itens-titulo">Nome do motorista</span>
            <span className="span-resposta-itens">João da Silva</span>
          </div>
          <div className="div-container-itens-resposta">
            <span className="span-resposta-itens-titulo">E-mail</span>
            <span className="span-resposta-itens">joaodasilva@gmail.com</span>
          </div>
          <div className="div-container-itens-resposta">
            <span className="span-resposta-itens-titulo">Celular</span>
            <span className="span-resposta-itens">(11) 9 8765-4321</span>
          </div>
          <div className="div-container-resposta-whatsapp">
            <span className="span-resposta-whatsapp">Contate-o via whatsapp</span>
            <div className="div-botao-resposta-whatsapp">
              <img className="imagem-resposta-whatsapp" src={Whatsapp} alt="Whatsapp"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Resposta;