require('dotenv').config({path: '.env'});
const regearServices = require('./regearServices');

const bodyParser = require('body-parser');
module.exports ={
    createRegear:async(req, res)=>{

        let Name= req.body.Name
        let Link= req.body.Link

        const newRegear = await regearServices.saveReger(Name, Link);
        res.json(newRegear);
    }
}