const express 	  = require('express'),
	  router  	  = express.Router();
const controlador = require('../controllers/auth');

// Obtener todos los usuarios del sistemas
router.get('/usuario',  controlador.obtener)

// Loguearse y obtener un token
router.post('/login',  controlador.autenticar)

// Loguearse y obtener un token
router.post('/logout',  controlador.salir)

// Registrar un usuario
router.post('/signup', controlador.registrar)

// Eliminar un usuario
router.delete('/usuario/:user', controlador.eliminar)

// Cambiar contraseña
router.put('/usuario/:user', controlador.cambiarContrasena)

module.exports = router;