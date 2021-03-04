const {Employee} = require('../models');

class EmployeeController {
    constructor(){

    }

    async indexAll(){
        return Employee.findAll();
    }

    async findById(id){
        return Employee.findOne({where:{id}});
    }

}

let employeeController = new EmployeeController;

module.exports = employeeController;