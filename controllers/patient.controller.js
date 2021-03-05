const {Patient} = require('../models');

class PatientController {
    constructor(){}

    // async indexAll(){
    //     return Patient.findAll();
    // }

    async findById(id){
         return Patient.FindOne({where:{id}});
    }

    async register(email, password){
        return Patient.create(email, password);
    }

    async logIn (email, password){
        return Patient.FindOne({where:{email, password}});
    }

    async logOut (){}

    async update(id){
        return Patient.findByIdAndUpdate({where:{id}});
        //Return new Appointment?
    }

    async deletePatient (id){
        return Patient.findByIdAndRemove({where:{id}});
    }
}

let patientController = new PatientController;

module.exports = patientController;