const express = require('express');
const router = express.Router(); 
const {vistaGatitos, crearGatito} = require('../controller/controller.js')

/* GET users listing. */
router.get('/ver', vistaGatitos);
router.post('/crear', crearGatito);

module.exports = router;
