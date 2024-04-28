'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class types extends Model {
    static associate(models) {
      types.hasMany(models.vehicles, {
        foreignKey: 'typeId',
        as: 'vehicles',
      });
    }
  }
  types.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'types',
  });
  return types;
};