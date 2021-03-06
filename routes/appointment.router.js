const router = require('express').Router();
const appointmentController = require('../controllers/appointment.controller');

//ENDPOINTS

//GET para consultar todas las citas 
router.get('/all', async (req, res) => {
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

//POST para crear una cita
router.post('/create/:id', async (req, res) => {
    try{
        let idPatient = req.params.idPatient;
        let status = 'Appointment created';
        let newAppointment = await appointmentController.createAppointment(idPatient);
        res.json({newAppointment, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//DELETE para eliminar cita
router.delete('/delete/:id', async (req, res) => {
    try{
        let idEmployee = req.params.idEmployee;
        let result = await appointmentController.deleteAppointment(idEmployee);
        let status = 'Appointment deleted'
        res.json({result, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//UPDATE para modificar datos de la cita
router.put('/update/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let result = await appointmentController.update(req.body);
        let status = 'Appointment deleted'
        res.json({result, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

module.exports = router; 