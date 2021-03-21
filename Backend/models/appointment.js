'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Appointment extends Model {
        
        static associate(models) {
            // define association here
            this.belongsTo(models.Patient, {
                foreignKey: 'idPatient',
                targetKey: 'id'
            });

            this.belongsTo(models.Employee, {
                foreignKey: 'idEmployee',
                targetKey: 'id'
            });
        }
    };
    
    Appointment.init({
<<<<<<< HEAD
        date: DataTypes.DATE, 
        time: DataTypes.TIME, 
=======
        date: DataTypes.DATE,
        time: DataTypes.TIME,
>>>>>>> main
        reason: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Appointment',
    });
    return Appointment;
};