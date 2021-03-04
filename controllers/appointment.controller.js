const {Appoiment} = require('../models');

class AppoimentController {
    constructor(){

    }

    async indexAll(){
        return Appoiment.findAll();
    }

    async findById(id){
        return Appoiment.findOne({where:{id}});
    }

    async findByIdPatient(idPatient){
        return Appoiment.findAll({where:{idPatient}});
    }

    async findByIdEmployee(idEmployee){
        return Appoiment.findAll({where:{idEmployee}});
    }
}

let appoimentController = new AppoimentController;

module.exports = appoimentController;