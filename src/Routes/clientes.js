const express = require('express');
const Cliente = require('../Models/Clientes');
const router = express.Router();
// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find(); // select * from clientes
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
});

// registrar un nuevo cliente
router.post('/', async (req, res) => {
  try {
    const { nombre, apellido, email } = req.body;
    const cli = {
      nombre,
      apellido,
      email,
    };
  
    const cliente = new Cliente(cli);
    console.log(cli);
    await cliente.save();
    res.status(201).send(cliente);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;