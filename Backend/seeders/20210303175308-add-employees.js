'use strict';
const bcrypt = require('bcrypt');

let employees = [
  {
    name: "Rodrigo", 
    surname1: "Perez", 
    surname2: "Gonzalez", 
    age: 34,
    gender: "Hombre", 
    email: "rodridentis@gmail.com", 
    address: "Calle Piruleta 3", 
    city: "Valencia", 
    state: "Valencia", 
    cp: 46002,
    phone: 568473988,
    password: bcrypt.hashSync("Dentist1$",6), 
    birth: "1987.10.10",
    specialty: "orthodontist", 
    admin: true
  }, {
    name: "Jessica", 
    surname1: "Rodriguez", 
    surname2: "Torres", 
    age: 30,
    gender: "Mujer", 
    email: "jessidentis@gmail.com", 
    address: "Calle Piruleta 3", 
    city: "Valencia", 
    state: "Valencia", 
    cp: 46010,
    phone: 568473988,
    password: bcrypt.hashSync("Dentist1$",6), 
    birth: "1991.10.10",
    specialty: "hygienist", 
    admin: true
  }];

  employees = employees.map((employee) => ({...employee, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Employees', employees); 

  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
