'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Appointment extends Model {
        
        static associate(models) {
            // define association here
            this.belongsTo(models.Patient, {
                foreingKey: 'idPatient',
                targetKey: 'id'
            });

            this.belongsTo(models.Employee, {
                foreingKey: 'idEmployee',
                targetKey: 'id'
            });
        }
    };
    
    Appointment.init({
        date: DataTypes.DATE,
        idPatient: DataTypes.INTEGER,
        idEmployee: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Appointment',
    });
    return Appointment;
};