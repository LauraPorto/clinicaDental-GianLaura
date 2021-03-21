//jwt para firmar token
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';

const auth = async (req, res, next) => {
    //si estoy en login o register, no verifiques el token de autenticación
    console.log(req);
    if(req.url.endsWith('/login') || (req.method === 'POST' && (req.baseUrl.endsWith('/patients') || req.baseUrl.endsWith('/employees')))){
        next();
        return;
    }

    try{
        const authorization = req.headers.authorization;
        const payload = jwt.verify(authorization, secret);

        req.user = {
            id: payload.patientId || payload.employeeId,
            userType: payload.patientId? 'Patient' : 'Employee'
        };
        
        //##############
        //Extraemos el valor de administrador para saber si entrará a las rutas como empleado o como paciente
        //const admin = req.body.admin;
        //jwt.verify(authorization, secret, admin)
        next();
    }catch(error){
        res.sendStatus(403);
    }
}

module.exports = auth;

