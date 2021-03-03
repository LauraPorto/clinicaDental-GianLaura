'use strict';

let patients = [
  {
    name: "Gian",
    surname1: "Rondo",
    surname2: "Santa Cruz", 
    age: 29, 
    gender: "M", 
    address: "Calle Roger de Lauria, 30", 
    email: "giancarlorondo@outlock.com", 
    phone: 123456789, 
    password: 1234
  }, {
    name: "Laura",
    surname1: "Porto",
    surname2: "Castro", 
    age: 26, 
    gender: "F", 
    address: "Calle Reverendo Rafael Tramoyeres, 31", 
    email: "lauuralaura@outlock.com", 
    phone: 648498786, 
    password: 4321
  }];

patients = patients.map((patient) => ({...patient, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Patients', patients); 
  
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
