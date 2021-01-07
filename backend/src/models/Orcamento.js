const { Model, DataTypes } = require("sequelize");

class Orcamento extends Model {
    static init (sequelize) {
        super.init(
        {
            data: DataTypes.STRING,
            hora: DataTypes.STRING,
            enderecoPartida: DataTypes.STRING,
            enderecoEntrega: DataTypes.STRING,
            item: DataTypes.STRING,
            descricao: DataTypes.STRING
        },
        {
          sequelize,  
        });
    }

    static associate(models) {
        this.belongsTo(models.Motorista, { as: "Motorista", foreignKey: "motorista_id" });
    }
}

module.exports = Orcamento;