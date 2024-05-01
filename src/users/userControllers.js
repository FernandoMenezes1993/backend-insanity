const userServices = require('./userServices');

module.exports ={
    getAllUsers:async(req, res)=>{
        let json

        let users = await userServices.getUsers();

        json =  users
        
        res.json(json);
    }
}