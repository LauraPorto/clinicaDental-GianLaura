const {MedicalRecord} = require('../models');

class MedicalRecordController {
    constructor(){}

    async indexAll(){
        return MedicalRecord.findAll();
    }

    async findById(id){
        return MedicalRecord.findOne({where:{id}});
    }

    async update(mr, id){
        return MedicalRecord.update(mr, {where:{id}});
    }

    
}

let medicalRecordController = new MedicalRecordController;

module.exports = medicalRecordController;