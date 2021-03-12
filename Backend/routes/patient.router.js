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


//POST para login
//Cambio a Post para no pasar la contraseña por la URL, no queda en el historial
router.post('/login', async (req, res) => {
    try{
        
        let email = req.body.email;
        let password = req.body.password;
        //let admin = req.body.admin;

        console.log('Comprobación del post login', email, password);
        
        let token = await patientController.logIn(email, password); 
        //let token = await patientController.logIn(email, password, admin);
        
        if(token){
            res.json({token});
        }else{
            res.sendStatus(403);
        }
        
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para logout
router.get('/logout', async (req, res) => {
    try{
        res.sendStatus(200);
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
        let id = req.params.id;
        let status = 'Success update';
        let result = await patientController.update(req.body, id);
        res.json({status, result});
    } catch (error) {
        res.status(500).json({
            message: "Server Error" + error
        });
    };
});

module.exports = router;