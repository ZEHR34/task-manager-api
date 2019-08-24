const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
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
  },
  tokens: [{
    token: {
      type: String,
      required: true
    }
  }]
})
//public profile
userSchema.methods.toJSON = function () {
  const user = this
  const userObject = user.toObject()

  delete userObject.password
  delete userObject.tokens

  return userObject
}

//auth
userSchema.methods.generateAuthToken = async function () {
  const user = this
  const token = jwt.sign({ _id: user._id.toString() }, 'TaskManagerApp')

  user.tokens = user.tokens.concat({ token })
  user.save()

  return token
}

//credentials
userSchema.statics.findByCredentials = async (email, password) => {

  const user = await User.findOne({ email })
  if (!user) {
    throw new Error('unable to login')
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw new Error('unable to login')
  }

  return user
}

//hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this


  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8)

  }

  next()
})

const User = mongoose.model('user', userSchema)


module.exports = User