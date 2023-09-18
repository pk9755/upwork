const connection = require('../helper/db');
const { DataTypes } = require('sequelize');

const Department = connection.define('departments',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    dep_name: {
        type:DataTypes.STRING,
        defaultValue:null
    },
    status:{
        type:DataTypes.ENUM,
        values: ['active', 'inActive'],
        defaultValue: 'active'
    },
   
})

module.exports = Department

