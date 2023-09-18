const empModel = require('../model/employee')
const addressModel = require('../model/address')
const salaryModel = require('../model/salary')
const departmentModel = require('../model/department')
const connection = require('../helper/db');




module.exports.list = async (params) => {
    try {
        let postSql = `SELECT dep.id AS departmentId, dep.dep_name AS departmentName, dep.status AS status, emp.username AS userName,
                       emp.status AS gender, emp.first_name AS firstName, emp.last_name AS lastName, addr.address AS address, addr.city,
                       sal.salary FROM departments AS dep JOIN employees AS emp ON dep.id = emp.dep_id 
                       JOIN address AS addr ON emp.id = addr.emp_id JOIN salaries AS sal ON emp.id = sal.emp_id`
        const res = await Promise.all([
            connection.query(postSql).then(([res]) => res),

        ]);
        return res[0];
    } catch (err) {
        console.log(err);
    }

}

