const {Player} = require('../models/player')

const validateId = async (req, res, next) =>{
    const player = await Player.findById(req.params.id)
    if({player} !== null){
        next()
    }
    res.json({msg:'Incorrect ID'})

}

module.exports = {validateId}