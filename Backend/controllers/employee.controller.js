const {Employee} = require('../models');

//bcrypt para encriptar psw 
const bcrypt = require('bcrypt');
//jwt para firmar token
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';


class EmployeeController {
    constructor(){}

    async indexAll(){
        return Employee.findAll();
    }

    async findById(id){
        return Employee.findOne({where:{id}});
    }

    async register(employee){
        //Encrypto la contrasela de employee
        employee.password = await bcrypt.hash(employee.password,6);
        return Employee.create(employee);
    }

    async logIn (email, password){
        //############Añadiríamos el parámetro admin de employee
        //Busco el employee por email
        const employee = await Employee.findOne({where:{email}});

        if(!employee){
            return null;
        }

        if(!await bcrypt.compare(password, employee.password)){
            //Le devuelvo un null para no pasarle detalles de error y facilitar inferir usuario y contraseña
            return null;
        }

        //informacion guardada en el token
        const payload = {
            employeeId : employee.id,
            tokenCreationDate: new Date
            //admin: employee.admin
            
            //#################propiedad de payload para poder firmar el token mediante el booleano true(employee), false (pacient)
            //Añadir un require en los modelos de empleado y paciente??

            //Le puedo poner la informacion que quiera, como el rol del usuario (adm, permisos...)
        };


        //Devuelvo un json del payload firmado
        return {
            token: jwt.sign(payload, secret),
            id: employee.id
        }; 
    }

    async logOut (){}

    async update(employee, id){
        return Employee.update(employee, {where:{id}});
    }

    async deleteEmployee (id){
        return Employee.destroy({where:{id}});
    }


}

let employeeController = new EmployeeController;

module.exports = employeeController;