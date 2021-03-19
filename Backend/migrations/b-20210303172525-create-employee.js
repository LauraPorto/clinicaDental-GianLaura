'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Employees', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      surname1: {
        type: Sequelize.STRING
      },
      surname2: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      }, 
      gender: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      State: {
        type: Sequelize.STRING
      },
      Cp: {
        type: Sequelize.INTEGER
      },
      phone: {
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.DATE
      },
      specialty: {
        type: Sequelize.STRING
      },
      admin: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Employees');
  }
};