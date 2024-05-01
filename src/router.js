const express = require('express');
const router = express.Router();
const cors = require('cors');

const userControllers = require('./users/userControllers');

var corsOptions = {
    header:{
        'Access-Control-Allow-Origin': 'http://localhost:5173'
    },
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 
}

router.get("/user", userControllers.getAllUsers);


module.exports = router;