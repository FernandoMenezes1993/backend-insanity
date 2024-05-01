const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router');
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/api', router);

mongoose.connect("mongodb+srv://insanityalbion:Xb8qqRnNTrDFrfAr@insanity-api.xswedqc.mongodb.net/?retryWrites=true&w=majority&appName=insanity-api", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conexão com MongoDB estabelecida com sucesso!");
    app.listen(port, () => {
      console.log(`Servidor rodando na porta ${port}`);
    });
  })
  .catch(err => {
    console.error("Falha ao conectar com MongoDB", err);
});