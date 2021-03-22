'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class MedicalRecord extends Model {

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

    MedicalRecord.init({
        description: DataTypes.STRING,
        allergy: DataTypes.STRING, 
        idEmployee: DataTypes.INTEGER, 
        idPatient: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'MedicalRecord',
    });
    return MedicalRecord;
};