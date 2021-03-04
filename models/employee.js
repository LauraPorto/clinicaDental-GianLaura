'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Employee extends Model {

        static associate(models) {
            // define association here
            this.hasMany(models.Appoiment, {
                sourceKey: 'id',
                foreignKey: 'employee'
            });

            this.hasMany(models.Medicalrecord, {
                sourceKey: 'id',
                foreignKey: 'employee'
            });
        }
    };
    
    Employee.init({
        name: DataTypes.STRING,
        surname1: DataTypes.STRING,
        surname2: DataTypes.STRING,
        specialty: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Employee',
    });
    return Employee;
};