const router = require('express').Router();
const medicalRecordController = require('../controllers/medical-record.controller');

//ENDPOINTS

//GET para consultar todas las fichas médicas
router.get('/all', async (req, res) => {
    try{
        res.json(await medicalRecordController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para consultar por id de paciente
router.get('/:id', async (req, res) => {
    try{
        let id = req.params.id;
        res.json(await medicalRecordController.findById(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//UPDATE para modificar datos de la ficha
router.put('/update/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let status = 'Success update';
        let result = await medicalRecordController.update(req.body, id);
        res.json({status, result});
    } catch (error) {
        res.status(500).json({
            message: "Server Error" + error
        });
    };
});


module.exports = router;