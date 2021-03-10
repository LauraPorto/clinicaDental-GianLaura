//jwt para firmar token
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';

const auth = async (req, res, next) => {
    //si estoy en login o register, no verifiques el token de autenticación
    if(req.url.endsWith('/login') || req.url.endsWith('/register')){
        next();
        return;
    }

    try{
        const authorization = req.headers.authorization;
        const payload = jwt.verify(authorization, secret);
        next();
    }catch(error){
        res.sendStatus(403);
    }
}

module.exports = auth;

