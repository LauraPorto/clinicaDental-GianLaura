const router = require('express').Router();

//Paciente se relaciona con ficha médica y con cita
//const appointmentRouter = require('../routes/appointment.router');
//const medicalRouter = require('../routes/medical.router');

const patientController = require('../controllers/patient.controller');


//ENDPOINTS

//GET para consultar ficha médica
router.get('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//GET para consultar cita por ID
router.get('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//GET para solicitar una cita
router.get('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//DELETE para cancelar una cita 
router.delete('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

module.exports = router;