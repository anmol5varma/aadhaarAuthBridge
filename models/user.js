'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    aadhaar_id: DataTypes.STRING,
    name: DataTypes.STRING,
    dob: DataTypes.DATE,
    gender: DataTypes.STRING,
    contact: DataTypes.STRING,
    co: DataTypes.STRING,
    house: DataTypes.STRING,
    street: DataTypes.STRING,
    landmark: DataTypes.STRING,
    lc: DataTypes.STRING,
    subdist: DataTypes.STRING,
    dist: DataTypes.STRING,
    state: DataTypes.STRING,
    pc: DataTypes.INTEGER,
    po: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};