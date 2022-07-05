const Joi = require('joi');

const id = Joi.number().integer();
const nombres = Joi.string().allow();
const primer_apellido = Joi.string().allow();
const segundo_apellido = Joi.string().allow();
const tipo_documento = Joi.string().allow();
const numero_documento = Joi.number().integer();
const fecha_nacimiento = Joi.date().allow();

const createUserSchema = Joi.object({
  nombres: nombres.required(),
  primer_apellido: primer_apellido.required(),
  segundo_apellido: segundo_apellido.required(),
  tipo_documento: tipo_documento.required(),
  numero_documento: numero_documento.required(),
  fecha_nacimiento: fecha_nacimiento.required(),
});

const updateUserSchema = Joi.object({

  id:id.required()

});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema }
