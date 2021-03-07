'use strict';
const bcrypt = require('bcrypt');


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
    password: bcrypt.hashSync('1234',6)
  }, {
    name: "Laura",
    surname1: "Porto",
    surname2: "Castro", 
    age: 26, 
    gender: "F", 
    address: "Calle Reverendo Rafael Tramoyeres, 31", 
    email: "lauuralaura@outlock.com", 
    phone: 648498786, 
    password: bcrypt.hashSync('4321',6)
  }];

patients = patients.map((patient) => ({...patient, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Patients', patients); 
  
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
