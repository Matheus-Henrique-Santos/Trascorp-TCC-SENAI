module.exports = {
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "bcd127",
    database: "TransCorp",
    logging: console.log,
    define:{
        timestamp: true,
        underscored: true
    }
}
//timestamp coloca created_at e updated_at nas tabelas
//underscored coloca os nomes de tabelas e atributos como snake_case
