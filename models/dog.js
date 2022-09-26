const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const storeSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
});
const Dog = mongoose.model('Dog', storeSchema); // Dog con mayuscula y en singular

module.exports = {Dog}