const Cliente = require("../models/Cliente");
const Motorista = require("../models/Motorista");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");
module.exports = {
    async store(req, res) {
        //recebe os dados de login
        const { email, senha } = req.body;

        //verificar se é cliente ou motorista e se o usuario existe
        let usuario = await Cliente.findOne({
            where: {
                email: email,
            }
        });

        // se usuário for um cliente
        if (usuario) {
            if (await bcrypt.compare(senha, usuario.senha)) {
                const token = jwt.sign({ usuarioId: usuario.id, usuarioPerfil: "cliente" }, authConfig.secret);

                //se existir e a senha estiver correta retorna ok com o token
                return res.status(201).send({
                    usuario: {
                        usuarioId: usuario.id,
                        usuarioPerfil: "cliente",
                        nome: usuario.nome,
                        imagem: usuario.fotoCliente
                    },
                    token
                });
            } 
        }
        else {
            //verificar se é cliente ou motorista e se o usuario existe
            usuario = await Motorista.findOne({
                where: {
                    email: email,
                }
            });
            console.log(usuario.id);
            if (usuario && await bcrypt.compare(senha, usuario.senha)) {
                const token = jwt.sign({ usuarioId: usuario.id, usuarioPerfil: "motorista"}, authConfig.secret);

                //se existir e a senha estiver correta retorna ok com o token
                return res.status(201).send({
                    usuario: {
                        usuarioId: usuario.id,
                        usuarioPerfil: "motorista",
                        nome: usuario.nome,
                        imagem: usuario.fotoMotorista
                    },
                    token
                });
            }
        }
        return res.status(403).send({ erro: "Usuário e/ou senha inválidos" });

    },
}