module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('otp_verifies', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    aadhaar_id: {
      unique: true,
      type: Sequelize.STRING,
    },
    otp: {
      type: Sequelize.INTEGER,
    },
    token: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('otp_verifies'),
};
