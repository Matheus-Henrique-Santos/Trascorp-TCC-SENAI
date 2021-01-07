import React from 'react';

import Sad from './assets/sad.svg';

function Erro(){
    return(
        <section style={{width: "100vw", height: "100vh", backgroundColor: "#EBEBEB", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <img src={Sad} style={{width: "10%", height: "20%"}}/>
            <span style={{color: "#000000", fontWeight: "bold", fontFamily: "helvetica", fontSize: "150px"}}>403</span>
            <span style={{color: "#000000", fontFamily: "helvetica", fontSize: "55px"}}>Acesso negado</span>
            <span style={{color: "#000000", fontFamily: "helvetica", fontSize: "25px", textAlign: "center"}}>
                A página que você está vendo não está disponível para este tipo de usuário.
            </span>
        </section>
    );
}

export default Erro;