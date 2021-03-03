'use strict';

let appointments = [
  {
    date: new Date
  }, {
    date: new Date
  }];

appointments = appointments.map((appointment) => ({...appointment, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Appointments', appointments); 

  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
