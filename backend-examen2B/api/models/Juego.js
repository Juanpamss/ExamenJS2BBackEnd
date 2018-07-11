/**
 * Juego.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombreJuego:{
      type: 'string',
      required: true
    },

    plataforma: {
      type: 'string',
      required: true
    },

    fechaLanzamiento: {
      type: 'string',
      required: true
    },

    imagenJuego: {
      type: 'string',
      required: true
    },

    desarrolladoraIdFK:{
      model: 'Desarrolladora',
    }

  },

};

