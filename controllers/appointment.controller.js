const {Appointment} = require('../models');

class AppointmentController {
    constructor(){

    }

    async indexAll(){
        return Appointment.findAll();
    }

    async findById(id){
        return Appointment.findOne({where:{id}});
    }

    async findByIdPatient(idPatient){
        return Appointment.findAll({where:{idPatient}});
    }

    async findByIdEmployee(idEmployee){
        return Appointment.findAll({where:{idEmployee}});
    }
}

let appointmentController = new AppointmentController;

module.exports = appointmentController;