module.exports = (sequelize, DataTypes) => {
  const otpVerify = sequelize.define('otp_verify', {
    aadhaar_id: {
      type: DataTypes.STRING,
      unique: true,
    },
    otp: DataTypes.INTEGER,
    token: DataTypes.STRING,
  }, {
    classMethods: {
      associate(models) {
        // associations can be defined here
      },
    },
  });
  return otpVerify;
};
