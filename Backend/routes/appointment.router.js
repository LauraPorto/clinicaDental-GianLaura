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

//GET para consultar citas pendientes
router.get('/next', async (req, res) => {
    try{
        res.json(await appointmentController.findNextAppointments(req.user.id));
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
router.post('/', async (req, res) => {
    try{
        let status = 'Appointment created';
        let newAppointment = await appointmentController.createAppointment(req.body);
        res.json({newAppointment, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//DELETE para eliminar cita
router.delete('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let result = await appointmentController.deleteAppointment(id);
        let status = 'Appointment deleted'
        res.json({result, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//UPDATE para modificar datos de la cita
router.put('/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let status = 'Success update';
        let result = await appointmentController.update(req.body, id);
        res.json({status, result});
    } catch (error) {
        res.status(500).json({
            message: "Server Error" + error
        });
    };
});


module.exports = router; 