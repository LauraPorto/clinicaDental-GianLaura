'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Patient extends Model {

        static associate(models) {
            // define association here
            this.hasMany(models.Appointment, {
                sourceKey: 'id',
                foreignKey: 'idPatient'
            });

            this.hasMany(models.MedicalRecord, {
                sourceKey: 'id',
                foreignKey: 'idPatient'
            });
        }
    };

    Patient.init({
        name: DataTypes.STRING,
        surname1: DataTypes.STRING,
        surname2: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING, 
        cp: DataTypes.INTEGER,
        phone: DataTypes.INTEGER,
        password: DataTypes.STRING, 
        birth: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Patient',
    });
    return Patient;
};

