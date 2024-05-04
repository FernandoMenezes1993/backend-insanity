require('dotenv').config({path: '.env'});
const userServices = require('./userServices');

const axios = require('axios');
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
    },
    getAllMembres:async(req,res)=>{
        let json= [];

        try {
            const response = await axios.get(`https://gameinfo.albiononline.com/api/gameinfo/guilds/${process.env.ID_GUILDA}/members`, { timeout: 200000 });
            const membros = response.data.length;

            for(let i = 0; i < membros; i++){
                let membro = {
                    nome: response.data[i].Name,
                    id: response.data[i].Id
                }
                json.push(membro);
            }
        } catch (error) {
            console.error('Erro ao fazer requisição:', error);
        }
        res.json(json);
    },
    checksName:async(req,res)=>{
        let json={
            length:0
        };
        let Nome = req.params.Nickname;
        const nameChecks = await userServices.checksNickname(Nome);
        
        if (nameChecks.length > 0) {
            //usuario ja cadastrado
            json={
                length:0
            };
        }else{
            //usuario não cadastrado
            json={
                length:1
            };
        }
            
        res.json(json);
    }
}