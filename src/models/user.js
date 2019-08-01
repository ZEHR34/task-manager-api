const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('user', {
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('invalid Email')
      }
    }
  },
  age: {
    type: Number,
    default: 0,
    validate(value) {
      if (value < 0) {
        throw new Error('Age Must be a postive number')
      }
    }
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 7,
    validate(value) {

      if (value.toLowerCase().includes("password")) {
        throw new Error("invalid password")
      }
    }
  }
})


module.exports = User