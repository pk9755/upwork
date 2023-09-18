const employee = require('../services/employeeServices');

module.exports.list = async(req,res) => {
    const result = await employee.list(req.query)
    res.json(result)
}
