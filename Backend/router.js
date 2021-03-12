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

/*
Nos traemos con auth el valor de admin, ahora hay que establecer las rutas para admin:true(employee) y admin:false(pacient)

adminCont = auth.admin;
let admin = adminCont ? let adEmployee = adminCont : let adPacient = adminCont;

RESOURCES
router.use('/......', auth, admin, ....Router);

Cargamos el tipo de admin en la ruta antes de las rutas específicas de cada modelo, para poder controlar el acceso antes de que entren en cada una.

*/