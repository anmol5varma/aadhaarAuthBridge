module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    aadhaar_id: {
      type: DataTypes.STRING,
      unique: true,
    },
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
    po: DataTypes.INTEGER,
  }, {
    classMethods: {
      associate() {
        // associations can be defined here
      },
    },
  });
  return user;
};
