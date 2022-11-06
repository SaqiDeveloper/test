const { DataTypes } = require("sequelize");
const sequelize = require('../dbConfig/config');
const teacher = require('../models/teacher')

const subject = sequelize.define("subject", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    name: {type : DataTypes.STRING},
});

sequelize.sync();

module.exports = subject;