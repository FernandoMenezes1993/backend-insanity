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

//POST
router.post("/user/new", cors(corsOptions), userControllers.addNewUser);
//Cadastrar novo usuario


// Rotas dos Regear
router.post("/create/regear",cors(corsOptions), regearControllers.createRegear);

module.exports = router;