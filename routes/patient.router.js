const router = require('express').Router();

//Paciente se relaciona con ficha médica y con cita
//const appointmentRouter = require('../routes/appointment.router');
//const medicalRouter = require('../routes/medical.router');

const patientController = require('../controllers/patient.controller');


//ENDPOINTS

//GET para registrarse
router.get('/register', async (req, res) => {
    try{
        let email = req.params.email;
        let password = req.params.password;
        res.json(await patientController.register(email, password));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});


router.get('/login', async (req, res) => {
    try{
        let email = req.params.email;
        let password = req.params.password;
        res.json(await patientController.logIn(email, password));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});



//PUT para modificar datos ??
router.get('', async (req, res) => {
    try{

    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//DELETE para cancelar una cita 
router.delete('/delete-appointment', async (req, res) => {
    try{
        let id = req.params.id;
        res.json(await patientController.destroy(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

module.exports = router;