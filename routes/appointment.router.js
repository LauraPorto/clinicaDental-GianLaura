const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');

//ENDPOINTS

//GET para consultar todas las citas 
router.get('/', async (req, res) => {
    try{
        res.json(await appointmentController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
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
            message: 'Server Error' + error
        });
    };
});

//GET para crear citas por ID paciente 
router.post('/patient/:id', async (req, res) => {
    try{
        let idPatient = req.params.idPatient;
        res.json(await appointmentController.createAppointment(idPatient));
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//DELETE para eliminar cita
router.delete('/employee/:id', async (req, res) => {
    try{
        let idEmployee = req.params.idEmployee;
        res.json(await appointmentController.deleteAppointment(idEmployee));
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

module.exports = router; 