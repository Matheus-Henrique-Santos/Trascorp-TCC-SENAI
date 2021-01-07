'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser feito
    return queryInterface.createTable("postagem", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true
      },
      motorista_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "motoristas",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    //aqui dizemos o que deve ser desfeito
    queryInterface.dropTable("postagem");
  }
};
