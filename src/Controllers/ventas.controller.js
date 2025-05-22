const express = require('express');
const Venta = require('../Models/Ventas.model');


const getVentas= async (req, res) => {
  try {
    const Ventas = await Venta.find(); // select * from Ventas
    res.json(Ventas);
  } catch (error) {
    res.status(500).json({ message:error.message });
  }
};

const getVentaById = async (req, res) => {
  try {
    const {id} = req.params;
    const Venta = await Venta.findById(id); // select * from Ventas where id = id`
    if (!Venta) {
      return res.status(404).json({ message: 'Venta no encontrado' });
    }
    res.status(200).json(Venta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createVenta = async (req, res) => {
  try {
    const { fecha,cantidad,total, producto,cliente } = req.body;
    const ven = {fecha,cantidad,total, producto,cliente};
    const Venta = new Venta(ven);
    await Venta.save();
    res.status(201).send(Venta);
  } catch (error) {
    res.status(400).send(error);
  }
};

const updateVenta =async (req, res) => {
  try {
    const { id } = req.params;
    const { fecha,cantidad,total, producto,cliente } = req.body;
    const Venta = await Venta.findByIdAndUpdate(
      id,{ fecha,cantidad,total, producto,cliente },{ new: true } // devuelve el Venta actualizado
    ); // update Ventas set nombre = nombre, apellido = apellido, email = email where id = id
    if (!Venta) {
      return res.status(404).json({ message: 'Venta no encontrado' });
    }
    res.status(200).json(Venta);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteVenta = async (req, res) => {
  try {
    const { id } = req.params;
    const Venta = await Venta.findByIdAndDelete(id); // delete from Ventas where id = id
    if (!Venta) {
      return res.status(404).json({ message: 'Venta no encontrado' });
    }
    res.status(200).json({ message: 'Venta eliminado' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVentas,
  getVentaById,
  createVenta,
  updateVenta,
  deleteVenta
};