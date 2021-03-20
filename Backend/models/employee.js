'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Employee extends Model {

        static associate(models) {
            // define association here
            this.hasMany(models.Appointment, {
                sourceKey: 'id',
                foreignKey: 'idEmployee'
            });

            this.hasMany(models.MedicalRecord, {
                sourceKey: 'id',
                foreignKey: 'idEmployee'
            });
        }
    };
    
    Employee.init({
        name: DataTypes.STRING,
        surname1: DataTypes.STRING,
        surname2: DataTypes.STRING, 
        gender: DataTypes.STRING,
        age: DataTypes.INTEGER,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING, 
        state: DataTypes.STRING, 
        cp: DataTypes.INTEGER,
        phone: DataTypes.INTEGER,
        password: DataTypes.STRING, 
        birth: DataTypes.DATE,
        specialty: DataTypes.STRING, 
        admin: DataTypes.BOOLEAN
    }, {
        sequelize,
        modelName: 'Employee',
    });
    return Employee;
};