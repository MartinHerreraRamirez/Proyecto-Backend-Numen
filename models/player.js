const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    surname: {
        type: String,
        required: true,        
    },
    shirtNumber: {
        type: Number,
        required: true,
    },
    team: {
        type: String,
        required: false,
    }
});
const Player = mongoose.model('player', storeSchema); // Cat con mayuscula y en singular

module.exports = {Player}