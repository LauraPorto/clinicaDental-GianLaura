const router = require('express').Router();
const patientController = require('../controllers/patient.controller');

//ENDPOINTS

//POST para registrarse
router.post('/register', async (req, res) => {
    try{
        let status = 'Patient created';
        let newPatient = await patientController.register(req.body); 
        res.json({newPatient, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para id paciente
router.get('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let patient = await patientController.findById(id);
        if(patient){
            res.json(patient);
        }else{
            res.sendStatus(404);
        }
        
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});


//GET para login
router.get('/login', async (req, res) => {
    try{
        let email = req.params.email;
        let password = req.params.password;
        let status = 'Log In !';

        let newPatient = await patientController.register(email, password); 

        res.json(status);
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para logout
router.get('/logout', async (req, res) => {
    try{
        let email = req.params.email;
        let password = req.params.password;
        let status = 'Log In !';

        let newPatient = await patientController.register(email, password); 

        res.json(status);
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//DELETE para pacientes
router.delete('/delete/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let result = await patientController.deletePatient(id);
        let status = 'Patient deleted';
        res.json({status, result});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//PUT para modificar datos de paciente
router.put('/update/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const status = 'Success update';
        const result = await patientController.update(id);
        res.json({status, result});
    } catch (error) {
        return status(500).json({
            message: "Server Error"
        });
    };
});

module.exports = router;