const router = require('express').Router();


const appointmentRouter = require('./routes/appointment.router');
const patientRouter = require('./routes/patient.router');
const medicalRouter = require('./routes/medical.router');
const employeeRouter = require('./routes/employee.router');


//RESOURCES
router.use('/appointment', appointmentRouter);
router.use('/patient', patientRouter);
router.use('/medical-record', medicalRouter);
router.use('/employee', employeeRouter);


module.exports = router;