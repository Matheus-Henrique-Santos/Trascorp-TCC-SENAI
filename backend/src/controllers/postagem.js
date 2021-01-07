const Postagem = require("../models/Postagem");
const Motorista = require("../models/Motorista");
module.exports = {

    async index(req, res) {
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        // if (usuarioPerfil !== "motorista")
        //     return res.status(403).send({ erro: "acesso negado" });
        try {
            const postagens = await Postagem.findAll(
                {
                    include: {
                        association: "Motorista",
                        attributes: ["id", "nome"]
                    },
                    order: [["created_at", "DESC"]],

                });
            res.send(postagens);
        } catch (error) {
            console.log(error);
        }

    },

    async store(req, res) {
        //o id do motorista deve vir do token
        //por enquanto o motorista está fixo
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "motorista")
            return res.status(403).send({ erro: "acesso negado" });

        const motorista_id = req.usuarioId; //busca os dados do motorista
        const { firebaseUrl } = req.file ? req.file : "";
        const { titulo, descricao } = req.body;
        try {
            const motorista = await Motorista.findByPk(motorista_id);
            if (!motorista) {
                res.status(404).send({ erro: "Motorista não encontrado" });
            }
            console.log(motorista)
            let post = await motorista.createPostagem({
                titulo,
                descricao,
                imagem: firebaseUrl
            });
            res.status(201).send({usuario: {post}});
        }
        catch (e) {
            console.error(e)
            return res.status(500).send({ erro: "Não foi possivel adicionar a Postagem, tente novamente mais tarde." })
        }
    },
    async delete(req, res) {
        //validando perfil do usuário no controller
        const { usuarioId, usuarioPerfil } = req;
        if (usuarioPerfil !== "motorista")
            return res.status(403).send({ erro: "acesso negado" });
        //pegando o id do motorista que esta logado
        const motorista_id = req.usuarioId;
        //pegando o id do post a apagar
        const { id } = req.params;

        //procura pelo id
        let postagem = await Postagem.findByPk(id);

        //se a Postagem não existir retorna not found
        if (!postagem) {
            return res.status(404).send({ erro: "Postagem não encontrada" });
        }
        //se o id do motorista logado for diferente do motorista que criou a Postagem retorna não autorizado
        if (postagem.motorista_id != motorista_id) {
            return res.status(401).send({ erro: "Você não tem permissão para excluir essa Postagem!" });
        }
        //efetua a exclusão da Postagem
        await postagem.destroy();

        res.status(200).send({ mensagem: "Sua postagem foi deletada com sucesso!" });
    }
}