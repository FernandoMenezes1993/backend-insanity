require('dotenv').config({path: '.env'});

const express = require('express');
const router = express.Router();
const cors = require('cors');

const userControllers = require('./users/userControllers');

var corsOptions = {
    header:{
        'Access-Control-Allow-Origin': `${process.env.URL_LOCAL}`
    },
    origin: `${process.env.URL_LOCAL}`,
    optionsSuccessStatus: 200 
}
//GET

router.get("/user", userControllers.getAllUsers);

router.get("/playresGuild", cors(corsOptions),userControllers.getAllMembres);
//Pegar o nome e ID de todos os membros da Insanity BR

//POST

router.post("/user/new", cors(corsOptions), userControllers.addNewUser);
//Cadastrar novo usuario

router.get("/checks/name/:Nickname", cors(corsOptions), userControllers.checksName);


module.exports = router;