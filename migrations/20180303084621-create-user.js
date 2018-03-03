
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    aadhaar_id: {
      type: Sequelize.STRING,
      unique: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.DATE,
    },
    gender: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    co: {
      type: Sequelize.STRING,
    },
    house: {
      type: Sequelize.STRING,
    },
    street: {
      type: Sequelize.STRING,
    },
    landmark: {
      type: Sequelize.STRING,
    },
    lc: {
      type: Sequelize.STRING,
    },
    subdist: {
      type: Sequelize.STRING,
    },
    dist: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    pc: {
      type: Sequelize.INTEGER,
    },
    po: {
      type: Sequelize.INTEGER,
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
  down: queryInterface => queryInterface.dropTable('users'),
};
