import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './pages/Home/index';
import "materialize-css/dist/css/materialize.min.css"
import "materialize-css/dist/js/materialize.min.js"
import './index.css';
import FeedSolicitacoes from './pages/FeedSolicitacoes/index';
import { isSignedIn } from './services/security';
import FeedVeiculos from './pages/FeedVeiculos/index';
import CadastroCliente from './pages/CadastroCliente/index';
import CadastroMotorista from './pages/CadastroMotorista/index';
import TipoDeCadastro from './pages/TipoCadastro/index';
import InicioCliente from './pages/InicioCliente/index';
import CriarSolicitacao from './pages/Modulos/solicitacao/index';
import Mensagens from './pages/Mensagens/index';
import Orcamento from './pages/TelaDeOrcamento';
import InicioMotorista from './pages/InicioMotorista/index';
import PaginaErro from './pages/Erro/index';
import ValorOrcamento from './pages/Valor/index';
import Detalhes from './pages/Detalhes/index';
import CriarPostagem from './pages/Modulos/postagem/index';

// privatiza as rotas, autoriza o acesso
const PrivateRoute = ({ children, location, ...rest }) => {
    return isSignedIn() ? (
        <Route {...rest}>{children}</Route>
    ) : (
            <Redirect to={{ pathname: "/erro", state: { from: location }, }} />);
};

const ClienteRoute = ({ children, location, ...rest }) => {
    return isSignedIn("cliente") ? (
        <Route {...rest}>{children}</Route>
    ) : (
        <Redirect to={{ pathname: "/erro", state: { from: location }, }} />);
};

const MotoristaRoute = ({ children, location, ...rest }) => {
    return isSignedIn("motorista") ? (
        <Route {...rest}>{children}</Route>
    ) : (
            <Redirect to={{ pathname: "/erro", state: { from: location }, }} />);
};

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/tipoDeCadastro">
                    <TipoDeCadastro />
                </Route>
                <Route exact path="/cadastroCliente">
                    <CadastroCliente />
                </Route>
                <Route exact path="/cadastroMotorista">
                    <CadastroMotorista />
                </Route>
                <Route exact path="/erro">
                    <PaginaErro/>
                </Route>
                <PrivateRoute exact path="/feedVeiculos">
                    <FeedVeiculos />
                </PrivateRoute>
                <ClienteRoute exact path="/orcamento">
                    <Orcamento/>
                </ClienteRoute>
                <MotoristaRoute exact path="/inicioMotorista">
                    <InicioMotorista/>
                </MotoristaRoute>
                <MotoristaRoute exact path="/valorOrcamento">
                    <ValorOrcamento/>
                </MotoristaRoute>
                <PrivateRoute exact path="/feedSolicitacoes">
                    <FeedSolicitacoes />
                </PrivateRoute>
                <ClienteRoute exact path="/inicioCliente">
                    <InicioCliente />
                </ClienteRoute>
                <ClienteRoute exact path="/criarSolicitacao">
                    <CriarSolicitacao />
                </ClienteRoute>
                <ClienteRoute exact path="/mensagens">
                    <Mensagens />
                </ClienteRoute>
                <MotoristaRoute exact path="/detalhes">
                    <Detalhes />
                </MotoristaRoute>
                <MotoristaRoute exact path="/criarPostagem">
                    <CriarPostagem />
                </MotoristaRoute>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;