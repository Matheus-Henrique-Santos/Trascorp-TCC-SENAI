const { Model, DataTypes } = require("sequelize");
class Solicitacao extends Model {
    static init (sequelize)
    {
        super.init({
        titulo: DataTypes.STRING,
        descricao: DataTypes.TEXT,
        imagem: DataTypes.STRING
        },
        {
            sequelize,
            tableName: "solicitacao"
        }
        );
    }
    static associate(models) {
        this.belongsTo(models.Cliente, {foreignKey: "cliente_id"});
        this.hasMany(models.Comentario);
    }
}
module.exports = Solicitacao;