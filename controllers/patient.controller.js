const {Patient} = require('../models');

class PatientController {
    constructor(){}

    // async indexAll(){
    //     return Patient.findAll();
    // }

    async findById(id){
         return Patient.findOne({where:{id}});
    }

    async register(patient){
        return Patient.create(patient);
    }

    async logIn (email, password){

        /*Logica de login con token*/

        return Patient.findOne({where:{email, password}});
    }

    async logOut (){}

    async update(patient, id){
        return Patient.update(patient, {where:{id}});
    }

    async deletePatient (id){
        return Patient.destroy({where:{id}});
    }
}

let patientController = new PatientController;

module.exports = patientController;