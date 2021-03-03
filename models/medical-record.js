'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medical - Record extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Medical - Record.init({
    description: DataTypes.STRING,
    allergy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Medical-Record',
  });
  return Medical - Record;
};