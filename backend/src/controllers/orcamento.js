const Orcamento = require("../models/Orcamento");
const Cliente = require("../models/Cliente");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");


module.exports = {

    //inserções
    async store(req, res) {
        const cliente_id = req.usuarioId; //busca os dados do cliente
        const { data, hora, enderecoPartida, enderecoEntrega, item, descricao } = req.body;

        try {
            const cliente = await Cliente.findByPk(cliente_id);
            if (!cliente) {
                res.status(404).send({ erro: "Cliente não encontrado" });
            }

            //validando perfil do usuário no controller
            const { usuarioId, usuarioPerfil } = req;
            if (usuarioPerfil !== "cliente")
                return res.status(403).send({ erro: "acesso negado" });


            let orcamento = await Orcamento.findOne({
                where: {
                    [Op.or]: [
                        { data: data },
                        { hora: hora },
                        { enderecoPartida: enderecoPartida },
                        { enderecoEntrega: enderecoEntrega },
                        { item: item },
                        { descricao: descricao }

                    ]
                },
            });

            if (orcamento) {
                return res.status(400).send({ erro: "Orçamento cadastrado" })
            }

            orcamento = await Orcamento.create({ data, hora, enderecoPartida, enderecoEntrega, item, descricao });
            const token = jwt.sign({ usuarioId: cliente.id, usuarioPerfil: "cliente" }, authConfig.secret);
            res.status(201).send({
                orcamento
            }, token);
        } catch (error) {
            console.log(error)
            res.status(500).send({ erro: "erro ao cadastrar" })
        }


    },

    update() {

    },
    async delete(req, res) {
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "cliente")
            return res.status(403).send({ erro: "acesso negado" });
        //pegando o id do cliente que esta logado
        const cliente_id = req.usuarioId;
        //pegando o id do post a apagar
        const { id } = req.params;

        //procura pelo id
        let orcamento = await Orcamento.findByPk(id);

        //se o orçamento não existir retorna not found
        if (!orcamento) {
            return res.status(404).send({ erro: "Orçamento não encontrado" });
        }
        //se o id do cliente logado for diferente do cliente que criou o orçamento retorna não autorizado
        if (orcamento.cliente_id != cliente_id) {
            return res.status(401).send({ erro: "Você não tem permissão para excluir esse orçamento!" });
        }
        //efetua a exclusão do orçamento
        await solicitacao.destroy();

        res.status(204).send();
    }
}