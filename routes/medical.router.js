const router = require('express').Router();

//Ficha médica se relaciona con paciente y con empleado
//const patientRouter = require('../routes/patient.router');
//const employeeRouter = require('../routes/employee.router');

const medicalRecordController = require('../controllers/medical-record.controller');


//ENDPOINTS

//GET para consultar las fichas médicas
router.get('/', async (req, res) => {
    try{
        res.json(await medicalRecordController.indexAll());
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
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
            message: 'Server Error'
        });
    };
});

//GET para consultar por id empleado
router.get('', async (req, res) => {
    try{
        let idEmployee = req.params.employee.id;
        res.json(await medicalRecordController.findByIdEmployee(id));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

//PUT para modificar datos de la ficha médica
router.put('', async (req, res) => {
    try{
        let idPatient = req.params.patient.id;
        res.json(await medicalRecordController.updateMedicalRecord(idPatient));
    }catch(error){
        res.status(500).json({
            message: 'Server Error'
        });
    };
});

module.exports = router;