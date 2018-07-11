/**
 * Libro.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreLibro:{
      type: 'string',
      required: true
    },

    autor: {
      type: 'string',
      required: true
    },

    fechaPublicacion: {
      type: 'string',
      required: true
    },

    imagenLibro: {
      type: 'string',
      required: true
    },

    estudianteIdFK:{
      model: 'Estudiante',
    }

  },

};

