const {Appointment} = require('../models');
const { Op } = require('sequelize');

class AppointmentController {
    constructor(){}

    async indexAll(){
        return Appointment.findAll();
    }
    
    async findNextAppointments(){
        return Appointment.findAll({where:{date: {[Op.gte]: new Date}}});
    }

    async findById(id){
        return Appointment.findOne({where:{id}});
    }

    async createAppointment(appointment){
        return Appointment.create(appointment);
    }

    async deleteAppointment(id){
        return Appointment.destroy({where:{id}});
    }

    async update(appointment, id){
        return Appointment.update(appointment, {where:{id}});
    }
}

let appointmentController = new AppointmentController;

module.exports = appointmentController;