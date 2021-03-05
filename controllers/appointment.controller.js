const {Appointment} = require('../models');

class AppointmentController {
    constructor(){}

    async indexAll(){
        return Appointment.findAll();
    }

    async findById(id){
        return Appointment.findOne({where:{id}});
    }

    async createAppointment(){
        return Appointment.create(Appointment);
    }

    async deleteAppointment(id){
        return Appointment.destroy({where:{id}});
    }
}

let appointmentController = new AppointmentController;

module.exports = appointmentController;