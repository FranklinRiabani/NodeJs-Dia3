const express = require('express');
const router = express.Router();

const {getProductos,getProductoById,createProducto,updateProducto,deleteProducto} = require('../Controllers/productos.controller');

// Obtener todos los Productos
router.get('/', getProductos); 

// registrar un nuevo Producto
router.post('/', createProducto);

// Obtener un Producto por ID
router.get('/:id', getProductoById);

// actualizar un Producto por ID
router.put('/:id', updateProducto);

// eliminar un Producto por ID
router.delete('/:id', deleteProducto);

module.exports = router;