const { DataTypes, BelongsTo } = require("sequelize");
const sequelize = require('../dbConfig/config');
const subject = require('../models/subject');
const student = require("./student");

const teacher = sequelize.define("teacher", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    teachername: {type : DataTypes.STRING},
    

});
teacher.belongsTo(subject)

sequelize.sync();

module.exports = teacher;