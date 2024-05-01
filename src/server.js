const express = require('express');
const bodyPerser = require('body-parser');
const router = require('./router');

const app = express();
const port = process.env.PORT || 3000;


app.use('/api', router);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});