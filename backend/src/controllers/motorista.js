const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
const bcrypt = require("bcryptjs");
const Motorista = require("../models/Motorista");


module.exports = {

    async listar(req, res) {
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "motorista")
            return res.status(403).send({ erro: "acesso negado" });
        const motoristas = await Motorista.findAll();
        res.send(motoristas);
    },

    //buscar um motorista pelo id
    async buscarPorId(req, res) {
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "motorista")
            return res.status(403).send({ erro: "acesso negado" });
        const id = req.params.id;

        //busca motorista pela chave
        const motorista = await Motorista.findByPk(id, { raw: true });
        
        //verifica se o motorista não foi encontrado
        if (!motorista) {
            res.status(404).send({ erro: "Motorista não encontrado" });
        }
        delete motorista.senha;
        res.send(motorista);
    },

    //metodo responsável por inserções
    async store(req, res) {
        try {
            //procurar motorista
            const { firebaseUrl } = req.file ? req.file : "";
            const { nome, data_nascimento, cpf, cnpj, email, senha, celular } = req.body;

            let motorista = await Motorista.findOne({
                where: {
                    [Op.or]: [
                        { cpf: cpf },
                        { email: email },
                        { celular: celular }
                    ]
                },
            });

            //se existe retorna cadastrado
            if (motorista) {
                return res.status(400).send({ erro: "Motorista já Cadastrado" })
            }

            const senhaCripto = await bcrypt.hash(senha, 10);

            // return console.log(firebaseUrl)

            //se não existir, cadastra no banco
            motorista = await Motorista.create(
                { nome, dataNascimento: data_nascimento, cpf, cnpj, email, senha: senhaCripto, celular, fotoMotorista: firebaseUrl }
            );

            const token = jwt.sign({ usuarioId: motorista.id, usuarioPerfil: "motorista" }, authConfig.secret);
            res.status(201).send({
                usuario: {
                    usuarioId: motorista.id,
                    nome: motorista.nome,
                },
                token
            });
        } catch (error) {
            console.log(error)
            res.status(500).send({ erro: "erro ao cadastrar" })
        }
    },

    update() {

    },
    delete() {

    }
}