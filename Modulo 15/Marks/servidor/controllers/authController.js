const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult} = require('express-validator');
const jwt = require ('jsonwebtoken');


exports.autenticar = async (req, res) => {

    const errores = validationResult(req);
    if(! errores.isEmpty()){
        return res.status(400).json({errores: errores.array()})
    }

    try {
        const {email, password} = req.body;
        
        //busca el usuario con ese mail
        let usuario = await Usuario.findOne({ email });

        if(!usuario){
            return res.status(400).json({ msg: 'El email ingresado no es correcto'})
        }

        //ver si el pass es correcto
        const isPassCorrecto = await bcryptjs.compare(password, usuario.password);

        if(!isPassCorrecto){
            return res.status(400).json({ msg: 'La contraseña es incorrecta'})
        }

        //si todo es correcto
         //crear y firmar el jwt, para el manejo de sesiones
         const payload = {
            usuario: {
                id: usuario.id
            }
        };

        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600 //valido por una hora
        },(error, token) =>{
            if(error) throw error;

            //confirmacion
            res.json({token});
        })


    } catch (error) {
        
    }
}