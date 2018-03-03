'use strict';
module.exports = (sequelize, DataTypes) => {
  var otp_verify = sequelize.define('otp_verify', {
    aadhaar_id: DataTypes.STRING,
    otp: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return otp_verify;
};