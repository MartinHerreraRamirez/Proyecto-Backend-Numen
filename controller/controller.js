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
            const player = new Player(req.body);
            await player.save()
            res.status(201).json({player, msg:'Great, Player created!'})
        }else{
            res.status(501).json(err)
        }       
    } catch (err) {
        res.status(501).json({msg: 'Could not create player', err})
    }   
}


const editPlayer = async (req, res) => { 
    try {
        const err = validationResult(req)
        if(err.isEmpty()){
            const {id} = req.params
            const newDataPlayer = req.body
            const oldDataPlayer = await Player.findByIdAndUpdate(id, req.body)
            res.status(202).json({oldDataPlayer, msg: "The player was edited", newDataPlayer})
        }else{
            res.status(501).json(err)
        }  
    } catch (err) {
        res.status(501).json({msg: 'Could not edit the player'})
    }        
}


const deletePlayer = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id)
        res.status(200).json({msg: 'The player was deleted', player})        
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


