'use strict';

let employees = [
  {
    name: "Rodrigo", 
    surname1: "Perez", 
    surname2: "Gonzalez", 
    speciality: "orthodontist"
  }, {
    name: "Jessica", 
    surname1: "Rodriguez", 
    surname2: "Torres", 
    speciality: "hygienist"
  }];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
