const express = require('express');
const router = express.Router(); 
const {seePlayers, createPlayer} = require('../controller/controller.js')

/* GET users listing. */
router.get('/ver', seePlayers);
router.post('/crear', createPlayer);
// practicando llamar api externa

module.exports = router;
