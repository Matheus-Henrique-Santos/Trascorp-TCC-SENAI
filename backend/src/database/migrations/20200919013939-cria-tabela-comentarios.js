'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser feito
    return queryInterface.createTable("comentarios", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cliente_id:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "clientes",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      solicitacao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "solicitacao",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      motorista_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "motoristas",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser desfeito
    queryInterface.dropTable("comentarios");
  }
};
