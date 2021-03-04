const router = require('express').Router();

// Employee se relaciona con cita y con ficha médica
//const appointmentRouter = require('../routes/appointment.router');
//const medicalRouter = require('../routes/medical.router');

const employeeController = require('../controllers/employee.controller');

//ENDPOINTS

//GET para consultar todas las citas
router.get('/', async (req, res) => {
    try{
        res.json(await employeeController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//GET para consultar un expediente por ID
router.get('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        res.json(await employeeController.indexAll(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});



module.exports = router;