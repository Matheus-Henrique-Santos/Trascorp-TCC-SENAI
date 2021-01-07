const express = require("express");
const cors = require("cors");

const rotas = require("./routes");

require("../src/database");

//inciando a aplicação
const app = express();

//aplicando CORS
app.use(cors());

//nas requisições pode ter corpo no formato json
app.use(express.json());
// app.use(express.urlencoded()); usar imagem sem o Multer.

//cadastrando as rotas
app.use(rotas);

module.exports = app;