require('dotenv').config({path: '.env'});

const express = require('express');
const router = express.Router();
const cors = require('cors');

const userControllers = require('./users/userControllers');
const regearControllers = require('./Regear/regearControlles')

var corsOptions = {
    header:{
        'Access-Control-Allow-Origin': `${process.env.URL_LOCAL}`
    },
    origin: `${process.env.URL_LOCAL}`,
    optionsSuccessStatus: 200 
}

//Verificar token
router.get('/checks/:token', cors(corsOptions), userControllers.checkToken);

// Rotas dos usuarios
//GET
router.get("/acorda", cors(corsOptions), userControllers.getAllUsers);

router.get("/playresGuild", cors(corsOptions),userControllers.getAllMembres);
//Pegar o nome e ID de todos os membros da Insanity BR

router.get("/checks/name/:Nickname", cors(corsOptions), userControllers.checksName);
//Verificar se o Nickname digitado já está cadastrado no mongoDB

router.get("/checks/user/:Nickname/:Senha", cors(corsOptions), userControllers.checkUser);
//Verificar credencias do usuario

router.get('/get/regear/:Nickname', cors(corsOptions), regearControllers.getRegear);
//Pega todas as solicitações de regear que esteja no Nickname

router.get('/regear/:id', cors(corsOptions), regearControllers.getRegerId);
//Pega um regear pelo id para mostrar na pagina do pedido

router.get("/get/all/regear", cors(corsOptions), regearControllers.getAllRegear);
//Pega todos os regear

router.get("/get/all/regear/staff", cors(corsOptions), regearControllers.getAllRegearStaff);
//Pega todos os regear aceitos e pendentes para a staff



//POST
router.post("/user/new", cors(corsOptions), userControllers.addNewUser);
//Cadastrar novo usuario
// Rotas dos Regear
router.post("/create/regear",cors(corsOptions), regearControllers.createRegear);
//Cadastrar um Re-gear


//UPDATE
router.put("/regear/att/:id", cors(corsOptions), regearControllers.attStatusRegar);
//Atualiza o status e o responsavel pelo regear

router.put("/regear/finalizar/:id", cors(corsOptions), regearControllers.finalizaRegar);

module.exports = router;