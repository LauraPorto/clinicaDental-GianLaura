const router = require('express').Router();
const employeeController = require('../controllers/employee.controller');

//ENDPOINTS

//GET para consultar todas las citas
router.get('/employee', async (req, res) => {
    try{
        res.json(await employeeController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para consultar un expediente por ID
router.get('/employee/:id', async (req, res) => {
    try{
        let id = req.params.id;
        res.json(await employeeController.findById(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});



module.exports = router;