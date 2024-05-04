'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, {
        foreignKey: 'UserId',
      });
      Activity.belongsTo(models.Project, {
        foreignKey: 'ProjectId',
      })
    }
  }
  Activity.init({
    title: DataTypes.STRING,
    startDate: DataTypes.DATE,
    finishDate: DataTypes.DATE,
    startTime: DataTypes.TIME,
    finishTime: DataTypes.TIME,
    duration: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    ProjectId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Activity',
  });
  return Activity;
};