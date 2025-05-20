const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola Programacion Web I....');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});