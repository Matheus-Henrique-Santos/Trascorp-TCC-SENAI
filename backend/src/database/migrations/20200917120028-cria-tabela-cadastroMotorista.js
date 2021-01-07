'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.createTable("motoristas", {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        unique:true
      },
      nome:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento:{
        type: Sequelize.DATE,
        allowNull: false,
      },
      cpf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj:{
        type: Sequelize.STRING,
        allowNull: false,
      },    
      email:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      senha:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      celular:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      foto_motorista:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("motoristas")
  }
};

