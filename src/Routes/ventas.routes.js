const express = require('express');
const router = express.Router();

const {getVentas,getVentaById,createVenta,updateVenta,deleteVenta} = require('../Controllers/ventas.controller');

// Obtener todos los Ventas
router.get('/', getVentas); 

// registrar un nuevo Venta
router.post('/', createVenta);

// Obtener un Venta por ID
router.get('/:id', getVentaById);

// actualizar un Venta por ID
router.put('/:id', updateVenta);

// eliminar un Venta por ID
router.delete('/:id', deleteVenta);

module.exports = router;