const express = require('express');
const router = express.Router();
const employee = require('../controller/employeeController')

router.get('/list',employee.list)


module.exports = router;
