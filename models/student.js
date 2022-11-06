const { DataTypes } = require("sequelize");
const sequelize = require('../dbConfig/config');
const teacher = require('../models/teacher')

const student = sequelize.define("student", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    studentname: {type : DataTypes.STRING},
});

student.belongsTo(teacher)
sequelize.sync();

module.exports = student;