const router = require('express').Router();
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
            message: 'Server Error' + error
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
            message: 'Server Error' + error
        });
    };
});

module.exports = router;