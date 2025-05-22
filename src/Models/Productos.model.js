const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  categoria: {
    type: String,
    required: true,
    trim: true,
  },
  costo: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Producto', productoSchema);