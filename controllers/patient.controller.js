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

    async update(id){
        return Patient.findByIdAndUpdate({where:{id}});
    }

    async deletePatient (id){
        return Patient.findByIdAndRemove({where:{id}});
    }
}

let patientController = new PatientController;

module.exports = patientController;