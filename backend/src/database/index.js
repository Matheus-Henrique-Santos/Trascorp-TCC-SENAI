const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Cliente = require("../models/Cliente");
const Motorista = require("../models/Motorista");
const Solicitacoes = require("../models/Solicitacao");
const Comentario = require("../models/Comentario");
const Postagem = require("../models/Postagem");
const Orcamento = require("../models/Orcamento");

//nova instancia da classe sequelize passando as configurações do banco de dados
const connection = new Sequelize(dbConfig);
//inicializando as models
Cliente.init(connection);
Motorista.init(connection);
Solicitacoes.init(connection);
Comentario.init(connection);
Postagem.init(connection);
Orcamento.init(connection);

//inicializando as associações
Cliente.associate(connection.models);
Motorista.associate(connection.models);
Solicitacoes.associate(connection.models);
Comentario.associate(connection.models);
Postagem.associate(connection.models);
Orcamento.associate(connection.models);

//exportamos a configuração
module.exports = connection;