const {Model, DataTypes} = require("sequelize");
class Comentario extends Model{
    static init(sequelize){
        super.init({
            descricao: DataTypes.TEXT,
        },
        {
            sequelize
        }
        );
    }
    static associate(models){
        this.belongsTo(models.Cliente, {foreignKey: "cliente_id"});
        this.belongsTo(models.Motorista, {foreignKey: "motorista_id"});
        this.belongsTo(models.Solicitacao, {foreignKey: "solicitacao_id"});
    }
}

module.exports = Comentario;