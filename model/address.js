const connection = require('../helper/db');
const { DataTypes } = require('sequelize');

const Address = connection.define('address',{
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    address: {
        type:DataTypes.STRING,
        defaultValue:null
    },
    city: {
        type:DataTypes.STRING,
        defaultValue:null
    },
    emp_id:{
        type:DataTypes.BIGINT,
    }
})

module.exports = Address

