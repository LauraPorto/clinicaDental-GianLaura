const router = require('express').Router();
const medicalRecordController = require('../controllers/medical-record.controller');

//ENDPOINTS

//GET para consultar todas las fichas médicas
router.get('/medical-record', async (req, res) => {
    try{
        res.json(await medicalRecordController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//GET para consultar por id de paciente
router.get('medical-record/:id', async (req, res) => {
    try{
        let id = req.params.idPatient;
        res.json(await medicalRecordController.findById(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});


module.exports = router;