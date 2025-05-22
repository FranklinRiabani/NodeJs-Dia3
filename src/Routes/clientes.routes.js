const express = require('express');
const Cliente = require('../Models/Clientes.model');
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

// Obtener un cliente por ID
router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params;
    const cliente = await Cliente.findById(id); // select * from clientes where id = id`
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// actualizar un cliente por ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, apellido, email } = req.body;
    const cliente = await Cliente.findByIdAndUpdate(
      id,
      { nombre, apellido, email },
      { new: true } // devuelve el cliente actualizado
    ); // update clientes set nombre = nombre, apellido = apellido, email = email where id = id
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






// eliminar un cliente por ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByIdAndDelete(id); // delete from clientes where id = id
    if (!cliente) {
      return res.status(404).json({ message: 'Cliente no encontrado' });
    }
    res.status(200).json({ message: 'Cliente eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;