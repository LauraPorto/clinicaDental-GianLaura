const {Patient} = require('../models');

class PatientController {
    constructor(){

    }

    async indexAll(){
        return Patient.findAll();
    }

    async findById(id){
        return Patient.FindOne({where:{id}});
    }

}

let patientController = new PatientController;

module.exports = patientController;