
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {  
        await mongoose.connect( "mongodb+srv://MartinsPol:milanesa@myfirstcluster.uhuyt.mongodb.net/test",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('Connected Database');
    } catch (err) {        
        console.log('Error when starting the database', err)   
    }
}

module.exports = {dbConnection}

