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
        return;
    }

    async deleteAppointment(){
        return;
    }
}

let appointmentController = new AppointmentController;

module.exports = appointmentController;