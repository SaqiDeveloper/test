const { DataTypes } = require("sequelize");
const sequelize = require('../dbConfig/config');
const salary = require('../models/salary')

const User = sequelize.define("employees", {
    id : {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
    name: {type : DataTypes.STRING},
    age: {type: DataTypes.INTEGER}

});

User.hasOne(salary)
sequelize.sync();

module.exports = User;