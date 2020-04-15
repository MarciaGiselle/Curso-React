// Rutas para autenticar usuarios //Login
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const {check} = require('express-validator');

// Autenticar un usuario
// api/auth
router.post('/', 
[
    check('email', 'Agrega un email valido').isEmail(),
    check('password', 'El password debe tener minimo 6 caracteres').isLength({min: 6})
],
    authController.autenticar
);

module.exports = router;