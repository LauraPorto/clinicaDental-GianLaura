const router = require('express').Router();

// Employee se relaciona con cita y con ficha médica
//const appointmentRouter = require('../routes/appointment.router');
//const medicalRouter = require('../routes/medical.router');

const employeeController = require('../controllers/employee.controller');

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

//GET para consultar un expediente por ID
router.get('', async (req, res) => {
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

//DELETE para cancelar una cita
router.delete('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});


//PUT para cambiar datos de una ficha 
router.put('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});



module.exports = router;