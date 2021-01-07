const { Model, DataTypes } = require("sequelize");

class Motorista extends Model {
    static init (sequelize) {//cadastra um json com os campos da tabela
        super.init(
        {
            nome: DataTypes.STRING,
            dataNascimento: DataTypes.STRING,
            cpf: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            celular: DataTypes.STRING,
            fotoMotorista: DataTypes.STRING
        },
        {
          sequelize,
          tableName: "motoristas"
        });
    }
    static associate(models) {
        // this.hasMany(models.Comentario);
        this.hasMany(models.Postagem, {foreignKey: "motorista_id"});
    }
}

module.exports = Motorista;