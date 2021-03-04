const {MedicalRecord} = require('../models');

class MedicalRecordController {
    constructor(){

    }

    async indexAll(){
        return MedicalRecord.findAll();
    }

    async findById(id){
        return MedicalRecord.findOne({where:{id}});
    }

    async findByIdPatient(idPatient){
        return MedicalRecord.findAll({where:{idPatient}});
    }

    async findByIdEmployee(idEmployee){
        return MedicalRecord.findAll({where:{idEmployee}});
    }
}

let medicalRecordController = new MedicalRecordController;

module.exports = medicalRecordController;