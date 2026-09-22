const mongoose = require('mongoose')

// Definição do "molde" (schema) da entidade Person
const Person = mongoose.model('Person', {
  name: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  approved: {
    type: Boolean,
    default: false,
  },
})

module.exports = Person
