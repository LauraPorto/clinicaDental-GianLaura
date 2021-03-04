const router = require('express').Router();

//Ficha médica se relaciona con paciente y con empleado
//const patientRouter = require('../routes/patient.router');
//const employeeRouter = require('../routes/employee.router');

const medicalController = require('../controllers/medical-record.controller');


//ENDPOINTS

//GET para consultar las fichas médicas
router.get('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//DELETE para cancelar una cita 
router.get('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//PUT para modificar una cita
router.put('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});



module.exports = router;