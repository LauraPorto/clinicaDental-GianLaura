'use strict';

let medicalrecords = [
  {
    description: "Dolor de muelas", 
    allergy: "No"
  }, {
    description: "Limpieza", 
    allergy: "Penicilina"
  }];

medicalrecords = medicalrecords.map((medicalrecord) => ({...medicalrecord, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Medicalrecords', medicalrecords); 

  },

  down: async (queryInterface, Sequelize) => {
  
  }
};

