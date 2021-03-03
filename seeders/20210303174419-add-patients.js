'use strict';

let patients = [
  {
    name: "Gian",
    surname1: "Rondo",
    surname2: "Santa Cruz", 
    age: 29, 
    genre: "M", 
    address: "Calle Roger de Lauria, 30", 
    email: "giancarlorondo@outlock.com", 
    phone: 123456789, 
    password: 1234
  }, {
    name: "Laura",
    surname1: "Porto",
    surname2: "Castro", 
    age: 26, 
    genre: "F", 
    address: "Calle Reverendo Rafael Tramoyeres, 31", 
    email: "lauuralaura@outlock.com", 
    phone: 648498786, 
    password: 4321
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
