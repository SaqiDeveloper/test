const { DataTypes } = require("sequelize");
const sequelize = require('../dbConfig/config');
// const user = require('../models/User')

const Salary = sequelize.define("salary", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    amout: { type: DataTypes.INTEGER },
});
// Salary.belongsTo(user)
sequelize.sync();

module.exports = Salary;