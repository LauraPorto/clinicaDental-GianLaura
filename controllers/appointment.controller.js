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

    async update(appointment, id){
        return Appointment.update(appointment, {where:{id}});
    }
}

let appointmentController = new AppointmentController;

module.exports = appointmentController;