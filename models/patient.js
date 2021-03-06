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
                foreignKey: 'patient'
            });

            this.hasMany(models.MedicalRecord, {
                sourceKey: 'id',
                foreignKey: 'patient'
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
        phone: DataTypes.INTEGER,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Patient',
    });
    return Patient;
};