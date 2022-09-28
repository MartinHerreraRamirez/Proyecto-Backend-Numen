const express = require('express');
const router = express.Router(); 
const {seePlayers, createPlayer, seeOnePlayer, editPlayer, deletePlayer} = require('../controller/controller.js')
const {check, validationResult, body} = require('express-validator')
const {validar} = require('../middleware/validation')

// GET players listing
router.get('/see', seePlayers);

// GET one player
router.get('/see/:id', seeOnePlayer);

// CREATE one player
router.post('/create',[
    check('name').not().isEmpty().withMessage('El campo se encuentra vacio').isLength({max:25, min:4}).withMessage('El nombre debe poseer entre 4 y 15 caracteres')    
], createPlayer);

// EDIT one player for params
router.put('/edit/:id', editPlayer)

// DELETE one player for params
//router.delete('/delete/:id', deletePlayer)

module.exports = router;
