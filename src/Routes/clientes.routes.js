const express = require('express');
const router = express.Router();

const {getClientes,getClienteById,createCliente,updateCliente,deleteCliente} = require('../Controllers/clientes.controller');

// Obtener todos los clientes
router.get('/', getClientes); 

// registrar un nuevo cliente
router.post('/', createCliente);

// Obtener un cliente por ID
router.get('/:id', getClienteById);

// actualizar un cliente por ID
router.put('/:id', updateCliente);

// eliminar un cliente por ID
router.delete('/:id', deleteCliente);

module.exports = router;