const router = require('express').Router();

const appointmentRouter = require('./routes/appointment.router');
const patientRouter = require('./routes/patient.router');
const medicalRouter = require('./routes/medical.router');
const employeeRouter = require('./routes/employee.router');

//Otengo el middleware de AUTH
const auth = require('./middlewares/auth');

//RESOURCES
router.use('/appointments', auth, appointmentRouter);
router.use('/patients', auth, patientRouter);
router.use('/medical-records', auth, medicalRouter);
router.use('/employees', auth, employeeRouter);


module.exports = router;