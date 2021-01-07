const { Model, DataTypes } = require("sequelize");

class Cliente extends Model {
    static init (sequelize)//cadastra um json com os campos da tabela
    {
        super.init({//chamar metodo da classe pai
            nome: DataTypes.STRING,
            dataNascimento: DataTypes.STRING,
            cpf: DataTypes.STRING,
            cnpj: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            celular: DataTypes.STRING,
            fotoCliente: DataTypes.STRING,
        },
        {
            sequelize,
            tableName: "clientes"
        }
        );
    }
    static associate(models) {
        this.hasMany(models.Solicitacao, {foreignKey: "cliente_id"});
        this.hasMany(models.Comentario);
    }
}
module.exports = Cliente;