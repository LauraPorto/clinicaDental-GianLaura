'use strict';

let medicalrecords = [
  {
    description: "Dolor de muelas", 
    allergy: "No", 
    idEmployee: 1, 
    idPatient: 2
  }, {
    description: "Limpieza", 
    allergy: "Penicilina", 
    idEmployee: 2, 
    idPatient: 1
  }];

medicalrecords = medicalrecords.map((medicalrecord) => ({...medicalrecord, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('MedicalRecords', medicalrecords); 

  },

  down: async (queryInterface, Sequelize) => {
  
  }
};

