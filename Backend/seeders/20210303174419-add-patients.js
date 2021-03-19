'use strict';
const bcrypt = require('bcrypt');


let patients = [
  {
    name: "Gian",
    surname1: "Rondo",
    surname2: "Santa Cruz", 
    gender: "M", 
    address: "Calle Roger de Lauria, 30", 
    email: "giancarlorondo@outlock.com", 
    phone: 123456789, 
    password: bcrypt.hashSync('Pacient1$',6),
    birth: "1991.12.05"
  }, {
    name: "Laura",
    surname1: "Porto",
    surname2: "Castro", 
    gender: "F", 
    address: "Calle Reverendo Rafael Tramoyeres, 31", 
    email: "lauuralaura@outlock.com", 
    phone: 648498786, 
    password: bcrypt.hashSync('Pacient2$',6),
    birth: "1994.09.06"
  }];

patients = patients.map((patient) => ({...patient, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Patients', patients); 
  
  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
