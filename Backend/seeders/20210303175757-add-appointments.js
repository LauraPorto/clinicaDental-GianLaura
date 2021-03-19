'use strict';

let appointments = [
  {
    date: new Date('2021.04.02'),
    time: ('15:40'),
    idPatient: 2,
    idEmployee: 1,
    reason: "Dolor muela"
  }, {
    date: new Date('2022.04.15'),
    time: ('10:00'),
    idPatient: 1,
    idEmployee: 2,
    reason: "Limpieza"
  }];

appointments = appointments.map((appointment) => ({...appointment, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('Appointments', appointments); 

  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
