const connection = require('../helper/db');
const { DataTypes } = require('sequelize');

const Employee = connection.define('employees',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type:DataTypes.STRING,
        defaultValue:null
    },
    first_name: {
        type:DataTypes.STRING,
        defaultValue:null
    },
    last_name:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    gender:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    password:{
        type:DataTypes.STRING,
        defaultValue:null
    },
    status:{
        type:DataTypes.ENUM,
        values: ['Female', 'Male']
    },
    dep_id:{
        type:DataTypes.BIGINT,
    }
})

module.exports = Employee

