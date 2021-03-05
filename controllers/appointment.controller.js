const {Appointment} = require('../models');

class AppointmentController {
    constructor(){}

    async indexAll(){
        return Appointment.findAll();
    }

    async findById(id){
        return Appointment.findOne({where:{id}});
    }

    async createAppointment(idPatient){
        return Appointment.create(idPatient);
    }

    async deleteAppointment(idEmployee){
        return Appointment.destroy({where:{idEmployee}});
    }
}

let appointmentController = new AppointmentController;

module.exports = appointmentController;