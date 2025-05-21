const express = require('express');
const Cliente = require('../Models/Clientes');
const router = express.Router();
// Obtener todos los clientes
router.get('/', async (req, res) => {
  try {
    const clientes = await Cliente.find(); // select * from clientes
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los clientes' });
  }
});

// registrar un nuevo cliente
router.post('/', async (req, res) => {
  const cliente = new Cliente(res.body);
  try {
    await cliente.save();// insert into clientes
    res.status(201).json(cliente);
  } catch (error) {
    res.status(400).json({ message: 'Error al registrar el cliente' });
  }
});

module.exports = router;