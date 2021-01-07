const { Model, DataTypes } = require("sequelize");

class Postagem extends Model {
    static init(sequelize) {
        super.init({
            titulo: DataTypes.STRING,
            descricao: DataTypes.TEXT,
            imagem: DataTypes.STRING
        },
            {
                sequelize,
                tableName: "postagem"
            }
        );
    }

    static associate(models) {
        this.belongsTo(models.Motorista, { as: "Motorista", foreignKey: "motorista_id" });
    }
}
module.exports = Postagem;