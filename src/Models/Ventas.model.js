const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
    trim: true,
  },
  cantidad: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
    producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producto',
        required: true
    },
    cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    }
});

module.exports = mongoose.model('Venta', ventaSchema);