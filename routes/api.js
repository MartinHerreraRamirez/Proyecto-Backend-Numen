const express = require('express');
const router = express.Router(); 
const { seePlayers, seeOnePlayer, createPlayer, editPlayer, deletePlayer, queryAxios} = require('../controller/controller.js');
const { validatePlayer } = require('../middleware/validationCreatePlayer.js');


// GET players listing
router.get('/see', seePlayers);

// GET AXIOS
router.get('/pokemon', queryAxios)

// CREATE one player
router.post('/create', validatePlayer, createPlayer);

// GET one player
router.get('/see/:id', seeOnePlayer);

// EDIT one player for params
router.put('/edit/:id', editPlayer)

// DELETE one player for params
router.delete('/delete/:id',  deletePlayer)

module.exports = router;
