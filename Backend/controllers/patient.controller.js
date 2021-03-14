const {Patient} = require('../models');

//bcrypt para encriptar psw 
const bcrypt = require('bcrypt');
//jwt para firmar token
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';


class PatientController {
    constructor(){}

    // async indexAll(){
    //     return Patient.findAll();
    // }

    async findById(id){
         return Patient.findOne({where:{id}});
    }

    async register(patient){
        //Encrypto la contrasela de patient
        patient.password = await bcrypt.hash(patient.password,6);
        return Patient.create(patient);
    }

    async logIn (email, password){
        //############Añadiríamos el parámetro admin de patient
        //Busco el patient por email
        const patient = await Patient.findOne({where:{email}});

        if(!patient){
            return null;
        }

        if(!await bcrypt.compare(password, patient.password)){
            //Le devuelvo un null para no pasarle detalles de error y facilitar inferir usuario y contraseña
            return null;
        }

        //informacion guardada en el token
        const payload = {
            patientId : patient.id,
            tokenCreationDate: new Date
            //admin: patient.admin
            
            //#################propiedad de payload para poder firmar el token mediante el booleano true(employee), false (pacient)
            //Añadir un require en los modelos de empleado y paciente??

            //Le puedo poner la informacion que quiera, como el rol del usuario (adm, permisos...)
        };


        //Devuelvo un json del payload firmado
        return {
            token: jwt.sign(payload, secret),
            id: patient.id
        }; 
    }

    async logOut (){}

    async update(patient, id){
        return Patient.update(patient, {where:{id}});
    }

    async deletePatient (id){
        return Patient.destroy({where:{id}});
    }


}

let patientController = new PatientController;

module.exports = patientController;