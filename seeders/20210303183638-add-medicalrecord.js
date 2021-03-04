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

<<<<<<< HEAD
    await queryInterface.bulkInsert('MedicalRecords', medicalrecords); 
=======
    await queryInterface.bulkInsert('Medicalrecords', medicalrecords); 
>>>>>>> main

  },

  down: async (queryInterface, Sequelize) => {
  
  }
};

