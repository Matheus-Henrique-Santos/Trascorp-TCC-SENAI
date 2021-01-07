//esse arquivo tem como responsábilidade cadastrar as rotas da aplicação
const express = require("express");
const multer = require("multer");

const Multer = multer({
    storage: multer.memoryStorage(),
    limits: 1024 * 1024,
});

//criando o routerizador
const routes = express.Router();

const clienteController = require("./controllers/cliente");
const solicitacoesController = require("./controllers/solicitacao");
const postagemController = require("./controllers/postagem");
const comentarioController = require("./controllers/comentarios");
const orcamentoController = require("./controllers/orcamento");
const motoristaController = require("./controllers/motorista");
const sessaoController = require("./controllers/sessao");
const autorizacaomiddleware = require("./middlewares/autorizacao");
const uploadImage = require("./services/firebase");

//rotas publicas
routes.post("/sessao", sessaoController.store); //login
routes.post("/cliente", Multer.single("foto_cliente"), uploadImage, clienteController.store); //criar 
routes.post("/motorista", Multer.single("foto_motorista"), uploadImage, motoristaController.store); //criar motorista

//middleware de proteção das rotas
routes.use(autorizacaomiddleware);

//routes usuarios
routes.get("/cliente", clienteController.listar); //listar cliente
routes.get("/cliente/:id", clienteController.buscarPorId); //buscar cliente
routes.get("/motorista", motoristaController.listar); //listar motorista
routes.get("/motorista/:id", motoristaController.buscarPorId); //buscar motorista

//routes orcamento
routes.post("/orcamento", orcamentoController.store); //criar orçamento
routes.delete("/orcamento/:id", orcamentoController.delete); //deletar orçamento

//routes solicitação
routes.post("/solicitacoes", Multer.single("imagem"), uploadImage, solicitacoesController.store); //criar solicitacao
routes.delete("/solicitacoes/:id", solicitacoesController.delete); //deletar solicitacao
routes.get("/solicitacoes", solicitacoesController.index); //listar solicitacao

//routes postagens
routes.post("/postagens", Multer.single("imagem"), uploadImage, postagemController.store); //criar postagem
routes.delete("/postagens/:id", postagemController.delete); //deletar postagem
routes.get("/postagens", postagemController.index); //listar postagem


//routes comentarios
routes.post("/solicitacoes/:postId/comentarios", comentarioController.store); //criar comentario
routes.get("/solicitacoes/:postId/comentarios", comentarioController.index); //listar comentario
module.exports = routes;