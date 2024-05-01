const userServices = require('./userServices');

const bodyParser = require('body-parser');
module.exports ={
    getAllUsers:async(req, res)=>{
        let json

        let users = await userServices.getUsers();

        json =  users
        
        res.json(json);
    },
    addNewUser:async(req, res)=>{
        let json

        let Name= req.body.Name
        let Senha= req.body.Senha
        let Email= req.body.Email
        let Cargo= "Membro"
        let Discordid= req.body.Discordid

        const newUser = await userServices.seveNewUser(Name, Senha, Email, Cargo, Discordid);        
        res.json(newUser);
    }
}