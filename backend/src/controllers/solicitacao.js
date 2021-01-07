const Solicitacao = require("../models/Solicitacao");
const Cliente = require("../models/Cliente");
module.exports = {

    async index(req, res) {
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        // if (usuarioPerfil !== "cliente")
        //     return res.status(403).send({ erro: "acesso negado" });
        const solicitacoes = await Solicitacao.findAll(
            {
                order: [["created_at", "DESC"]],
                include: {
                    association: "Cliente",
                    attributes: ["id", "nome"]
                }
            });
        res.send(solicitacoes);
    },

    async store(req, res) {
        //o id do cliente deve vir do token
        //por enquanto o cliente está fixo
        const cliente_id = req.usuarioId; //busca os dados do cliente
        const { firebaseUrl } = req.file ? req.file : "";
        const { titulo, descricao } = req.body;
        try {
            const cliente = await Cliente.findByPk(cliente_id);
            if (!cliente) {
                res.status(404).send({ erro: "Cliente não encontrado" });
            }

            //validando perfil do usuário no controller
            const { usuarioId, usuarioPerfil } = req;
            if (usuarioPerfil !== "cliente")
                return res.status(403).send({ erro: "acesso negado" });

            let post = await cliente.createSolicitacao({
                titulo,
                descricao,
                imagem: firebaseUrl
            });
            res.status(201).send({usuario: {post}});
        }
        catch (e) {
            console.error(e)
            return res.status(500).send({ erro: "Não foi possivel adicionar a solicitacao, tente novamente mais tarde." })
        }
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
        let solicitacao = await Solicitacao.findByPk(id);

        //se a solicitacao não existir retorna not found
        if (!solicitacao) {
            return res.status(404).send({ erro: "Solicitacao não encontrada" });
        }
        //se o id do cliente logado for diferente do cliente que criou a solicitacao retorna não autorizado
        if (solicitacao.cliente_id != cliente_id) {
            return res.status(401).send({ erro: "Você não tem permissão para excluir essa solicitacao!" });
        }
        //efetua a exclusão da solicitacao
        await solicitacao.destroy();

        res.status(204).send();
    }
}