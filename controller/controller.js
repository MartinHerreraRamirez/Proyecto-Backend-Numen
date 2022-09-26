const {Cat} = require('../models/model')
const {Dog} = require('../models/dog')

const vistaUno = (req, res)=>{
    res.render('index', { title: 'Express' });
}

const vistaGatitos = async (req, res) =>{
    const gatitos = await Cat.find()
    res.json({gatitos})
}

const crearGatito = async (req, res)=>{
    try {
        const save = new Cat(req.body);
        await save.save()
        res.status(201).json(save)
    } catch (error) {
        res.status(501).json({msg: 'no se pudo guardar el gato ' + error})
    }   
}

module.exports = {vistaUno, crearGatito, vistaGatitos}