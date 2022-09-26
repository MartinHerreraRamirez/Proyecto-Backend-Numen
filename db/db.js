
const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {  
        await mongoose.connect( "mongodb+srv://MartinsPol:milanesa@myfirstcluster.uhuyt.mongodb.net/test",{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        } )
        console.log('Base de datos conectada');
    } catch  {        
        console.log('Error a la hora de iniciar la base de datos')   
    }
}

module.exports = {dbConnection}

