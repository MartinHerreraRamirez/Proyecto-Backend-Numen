const express = require('express');
const router = express.Router(); 
const {seeOne, createPlayer, seePlayers, seeOnePlayer, editPlayer, deletePlayer} = require('../controller/controller.js')
const {check, validationResult, body} = require('express-validator')
const {validar} = require('../middleware/validation')
const {validateId} = require('../middleware/validateId')

// GET players listing
router.get('/see', seePlayers);

// GET one player
router.get('/see/:id', seeOnePlayer);

// CREATE one player
router.post('/create',[
    check('name').not().isEmpty().withMessage('The field is empty').isLength({max:25, min:3}).withMessage('The Name must have between 3 and 25 characters'),
    check('surname').not().isEmpty().withMessage('The field is empty').isLength({max:25, min:3}).withMessage('The Surname must have between 3 and 25 characters'),
    check('shirtNumber').not().isEmpty().withMessage('The field is empty').isLength({max:3, min:1}).withMessage('The Shirt Number must have between 1 and 3 numbers'),
    check('team').not().isEmpty().withMessage('The field is empty').isLength({max:15, min:7}).withMessage('The Team must have between 7 and 15 characters')       
], createPlayer);

// EDIT one player for params
router.put('/edit/:id', editPlayer)

// DELETE one player for params
router.delete('/delete/:id', deletePlayer)

module.exports = router;
