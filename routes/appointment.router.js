const router = require('express').Router();

//Cita se relaciona con empleado y con paciente
//const employeeRouter = require('../routes/employee.router');
//const patientRouter = require('../routes/patient.router');

const appointmentController = require('../controllers/appointment.controller');

//ENDPOINTS

//GET para consultar todas las citas 
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

//POST para crear una cita
router.post('', async (req, res) => {
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