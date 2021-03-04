const router = require('express').Router();

//Cita se relaciona con empleado y con paciente
//const employeeRouter = require('../routes/employee.router');
//const patientRouter = require('../routes/patient.router');

const appointmentController = require('../controllers/appointment.controller');

//ENDPOINTS

//GET para consultar todas las citas 
router.get('/', async (req, res) => {
    try{
        res.json(await appointmentController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//GET para consultar las citas por ID
router.get('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        res.json(await appointmentController.findById(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//GET para consultar las citas por ID paciente 
router.get('/patient/:id', async (req, res) => {
    try{
        let idPatient = req.params.patient.id;
        res.json(await appointmentController.findByIdPatient(idPatient));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//GET para consultar las citas por ID empleado
router.get('/employee/:id', async (req, res) => {
    try{
        let idEmployee = req.params.employee.id;
        res.json(await appointmentController.findByIdEmployee(idEmployee));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});




module.exports = router; 