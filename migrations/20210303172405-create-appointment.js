'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      idPatient: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Patient',
          key: 'id'
        }
      },
      idEmployee:{
        type: Sequelize.INTEGER,
        references: {
          model: 'Employee',
          key: 'id'
        }
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Appointments');
  }
};