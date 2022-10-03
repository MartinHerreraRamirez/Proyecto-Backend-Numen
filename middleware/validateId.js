const {Player} = require('../models/player');

exports.validateId = async (req, res, next) => {
    try {
        const player = await Player.findById(req.params.id)
        if (player !== null) {
            next();
        } else {
            res.status(400).json({msg: "The incorrect Id."})
        }
    } 
    catch (err) {
        res.status(400).json({msg:"The id no work", err})
    }
}

