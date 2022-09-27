const {Player} = require('../models/player')

const seeOne = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const seePlayers = async (req, res) =>{
    const players = await Player.find()
    res.json({players})
}

const createPlayer = async (req, res)=>{
    try {
        const save = new Player(req.body);
        await save.save()
        res.status(201).json(save)
    } catch (error) {
        res.status(501).json({msg: 'no se pudo guardar el jugador ' + error})
    }   
}



module.exports = {seeOne, createPlayer, seePlayers}