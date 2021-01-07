const { Op } = require("sequelize");
const Cliente = require("../models/Cliente");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");


module.exports = {
    async listar(req, res) {
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "cliente")
            return res.status(403).send({ erro: "acesso negado" });

        const clientes = await Cliente.findAll();
        res.send(clientes);
    },
    //buscar um cliente pelo id
    async buscarPorId(req, res) {
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "cliente")
            return res.status(403).send({ erro: "acesso negado" });
        const id = req.params.id;
        // busca o cliente pela chave
        const cliente = await Cliente.findByPk(id, { raw: true });
        // verifica se o cliente não foi encontrado
        if (!cliente) {
            res.status(404).send({ erro: "Cliente não encontrado" });
        }
        delete cliente.senha;
        res.send(cliente);
    },
    //metodo responsável por inserções
    async store(req, res) {

        try {
            //procurar cliente
            const { firebaseUrl } = req.file ? req.file : "";
            const { nome, data_nascimento, cpf, cnpj, email, senha, celular } = req.body;


            let cliente = await Cliente.findOne({
                where: {
                    [Op.or]: [
                        { nome: nome },
                        { email: email }
                    ]
                }
            });

            //se existe retorna cadastrado
            if (cliente) {
                return res.status(400).send({ erro: "Cliente já cadastrado" });
            }

            const senhaCripto = await bcrypt.hash(senha, 10);


            // return console.log(firebaseUrl);

            //se nao existir cadastrar no banco
            cliente = await Cliente.create({ nome, dataNascimento: data_nascimento, cpf, cnpj, email, senha: senhaCripto, celular, fotoCliente: firebaseUrl });

            const token = jwt.sign({ usuarioId: cliente.id, usuarioPerfil: "cliente" }, authConfig.secret);
            res.status(201).send({
                usuario: {
                    usuarioId: cliente.id,
                    nome: cliente.nome,
                },
                token
            });


        } catch (e) {
            console.error(e)
            res.status(500).send({ erro: "erro ao cadastrar" })
        }
    },
    update() {

    },
    delete() {

    },

}