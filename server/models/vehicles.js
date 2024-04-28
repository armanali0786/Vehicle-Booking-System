'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicles extends Model {
    static associate(models) {
      vehicles.belongsTo(models.types, {
        foreignKey: 'typeId',
        as: 'types',
      });
    }
  }
  vehicles.init({
    name: DataTypes.STRING,
    typeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vehicles',
  });
  return vehicles;
};