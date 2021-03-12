'use strict';

let employees = [
  {
    name: "Rodrigo", 
    surname1: "Perez", 
    surname2: "Gonzalez", 
    specialty: "orthodontist"
    //admin: true
  }, {
    name: "Jessica", 
    surname1: "Rodriguez", 
    surname2: "Torres", 
    specialty: "hygienist"
    //admin: true
  }];

  employees = employees.map((employee) => ({...employee, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Employees', employees); 

  },

  down: async (queryInterface, Sequelize) => {
    
  }
};
