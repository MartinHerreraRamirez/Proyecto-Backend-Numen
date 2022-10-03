const express = require('express');
const router = express.Router(); 
const { seePlayers, seeOnePlayer, createPlayer, editPlayer, deletePlayer, queryAxios } = require('../controller/controller.js');
const { validatePlayer } = require('../middleware/validatePlayer.js');
const { validateId } = require('../middleware/validateId.js')

//METHODS WITHOUT ID

// GET players listing
router.get('/see', seePlayers)

// GET AXIOS
router.get('/extern', queryAxios)

// CREATE one player
router.post('/create', validatePlayer, createPlayer)


//METHODS WITH ID

// GET one player
router.get('/see/:id', validateId, seeOnePlayer)

// EDIT one player for params
router.put('/edit/:id', validateId, editPlayer)

// DELETE one player for params
router.delete('/delete/:id', validateId, deletePlayer)


module.exports = router;
