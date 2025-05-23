require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');



const app = express();


app.use(express.json());



const port = process.env.PORT || 3000;

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conectado a la base de datos MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });

app.get('/', (req, res) => {
  res.send('Hola Programacion Web I....');
});


const clientesRoutes = require('./Routes/clientes.routes');
app.use('/clientes', clientesRoutes);

const productosRoutes = require('./Routes/productos.routes');
app.use('/productos', productosRoutes);

const ventasRoutes = require('./Routes/ventas.routes');
app.use('/ventas', ventasRoutes);


app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});