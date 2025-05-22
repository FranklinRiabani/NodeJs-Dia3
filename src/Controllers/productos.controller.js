const express = require('express');
const Producto = require('../Models/Productos.model');


const getProductos= async (req, res) => {
  try {
    const Productos = await Producto.find(); // select * from Productos
    res.json(Productos);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};

const getProductoById = async (req, res) => {
  try {
    const {id} = req.params;
    const producto = await Producto.findById(id); // select * from Productos where id = id`
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProducto = async (req, res) => {
  try {
    const { nombre, categoria, costo,stock } = req.body;
    const pro = {nombre,categoria,costo,stock};
    const producto = new Producto(pro);
    await producto.save();
    res.status(201).send(producto);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateProducto =async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, categoria,costo,stock } = req.body;
    const producto = await Producto.findByIdAndUpdate(
      id,{ nombre, categoria,costo,stock },{ new: true } // devuelve el producto actualizado
    ); // update Productos set nombre = nombre, apellido = apellido, email = email where id = id
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json(producto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const producto = await Producto.findByIdAndDelete(id); // delete from Productos where id = id
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.status(200).json({ message: 'Producto eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProductos,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto
};