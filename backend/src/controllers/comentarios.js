const Comentario = require("../models/Comentario");
const Postagem = require("../models/Solicitacao");
module.exports = {
    //implementar a listagem de comentarios
    async index(req, res){
        const {postId} = req.params;
        const postagem = await Postagem.findByPk(postId);
        if(!postagem){
            return res.status(404).send({erro: "Solicitação não encontrada"});
        }
        const comentarios = await postagem.getComentarios({
            include: {
                association: "Cliente",
                as: "cliente",
                attributes: ["id", "nome", "email", "celular"],
            },
            attributes: ["id", "descricao", "created_at"],
            order: [["created_at", "ASC"]]
        });
        res.send(comentarios);
    },
    //implementar a inserção de comentários
    async store(req, res){
        const clienteId = req.clienteId;
        const postId = req.params.postId;
        const {descricao} = req.body;
        const postagem = await Postagem.findByPk(postId);
        if(!postagem){
            res.status(404).send({erro: "Cliente não encontrado"});
        }
        console.log(postId);
        let comentario = await postagem.createComentario({
            descricao,
            cliente_id: clienteId
        });

        comentario = comentario.dataValues;
        comentario.postagem_id = comentario.PostagemId;
        delete comentario.PostagemId;
        delete comentario.clienteId;
        res.status(201).send(comentario);
    }
};
