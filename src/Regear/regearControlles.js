require('dotenv').config({path: '.env'});
const regearServices = require('./regearServices');

const bodyParser = require('body-parser');
module.exports ={
    createRegear:async(req, res)=>{

        let Name= req.body.Name
        let Link= req.body.Link
        let Responsavel = "Insanity BR"
        let Class= req.body.Class
        let Status = "Pendente"

        const newRegear = await regearServices.saveReger(Name, Link, Responsavel, Class, Status);
        console.log(newRegear)
        res.json(newRegear);
    },
    getRegear:async(req, res)=>{
        let Nickname= req.params.Nickname

        const regears = await regearServices.regears(Nickname);
        res.json(regears);
    }
}