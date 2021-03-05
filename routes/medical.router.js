const router = require('express').Router();
const medicalRecordController = require('../controllers/medical-record.controller');

//ENDPOINTS

//GET para consultar las fichas médicas
router.get('/', async (req, res) => {
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
        let id = req.params.patient.id;
        res.json(await medicalRecordController.findByIdPatient(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});


module.exports = router;