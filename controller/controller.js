const res = require('express/lib/response')
const {Player} = require('../models/player')
const {check, validationResult, body} = require('express-validator')


const seeOne = (req, res) => {
    res.render('index', { title: 'Express' });
}

const seePlayers = async (req, res) => {
    const players = await Player.find()
    res.json({players})
}

const seeOnePlayer = async ( req, res) => {
    try {
        const player = await Player.findById(req.params.id)
        res.json({player})
    } catch (error) {
        res.status(400).json({msg: 'Incorrect id', error})
    }
}

const createPlayer = async (req, res)=>{
    try {
        const error = validationResult(req)
        if(error.isEmpty()){
            const {name} = req.body
            const player = new Player({name});
            await player.save()
            res.status(201).json({player, msg:'Great, Player created!'})
        }else{
            res.status(501).json(error)
        }       
    } catch (err) {
        res.status(501).json({msg: 'no se pudo crear el jugador ' + err})
    }   
}

const editPlayer = async (req, res) => {
    const {id} = req.params
    const name = req.body.name   
    await Player.findByIdAndUpdate(id, req.body)
    res.status(202).json(name)
}



module.exports = {seeOne, createPlayer, seePlayers, seeOnePlayer, editPlayer}