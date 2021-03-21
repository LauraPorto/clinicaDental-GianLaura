const router = require('express').Router();
const employeeController = require('../controllers/employee.controller');

//ENDPOINTS

//POST para registrarse
router.post('/', async (req, res) => {
    try{
        let status = 'Employee created';
        let newEmployee = await employeeController.register(req.body); 
        res.json({newEmployee, status});
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para consultar todos los employees
router.get('/', async (req, res) => {
    try{
        res.json(await employeeController.indexAll());
        
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para id employee
router.get('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        let employee = await employeeController.findById(id);
        if(employee){
            res.json(employee)
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

        console.log('Comprobación del post login', email, password);
        
        let token = await employeeController.logIn(email, password); 
        
        if(token){
            res.json(token);
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


module.exports = router;