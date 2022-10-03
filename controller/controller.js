const res = require('express/lib/response')
const {Player} = require('../models/player')
const {check, validationResult, body} = require('express-validator');
const axios = require('axios');


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
        const err = validationResult(req)
        if(err.isEmpty()){
            const {name, surname, shirtNumber, team} = req.body
            const player = new Player({name, surname, shirtNumber, team});
            await player.save()
            res.status(201).json({player, msg:'Great, Player created!'})
        }else{
            res.status(501).json(err)
        }       
    } catch (err) {
        res.status(501).json({msg: 'Could not create player ' + err})
    }   
}


const editPlayer = async (req, res) => {
    const {id} = req.params
    const {data} = req.body
    await Player.findByIdAndUpdate(id, req.body)
    res.status(202).json(data)
}


const deletePlayer = async (req, res) => {
    try {
        const {data} = await Player.findByIdAndDelete(req.params.id)
        res.json({msg: 'The player was deleted', data})        
    } catch (err) {
        res.status(400).json({msg: 'Could not delete the player - incorrect ID'})
    }
}


const queryAxios = async (req,res) => {

    const {data} = await axios.get('http://pokeapi.co/api/v2/pokemon/ditto', { timeout: 10000}).catch((err)=> {
        res.status(401).json(err)
    })
    res.json(data)   
}


module.exports = {seeOne, createPlayer, seePlayers, seeOnePlayer, editPlayer, deletePlayer, queryAxios}