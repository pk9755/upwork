const connection = require('../helper/db');
const { DataTypes } = require('sequelize');

const Salary = connection.define('salaries',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    salary:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    emp_id:{
        type:DataTypes.BIGINT,
    }
})

module.exports = Salary

