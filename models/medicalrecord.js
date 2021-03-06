'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class MedicalRecord extends Model {

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

    MedicalRecord.init({
        description: DataTypes.STRING,
        allergy: DataTypes.STRING,
        idPatient: DataTypes.INTEGER,
        idEmployee: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'MedicalRecord',
    });
    return MedicalRecord;
};