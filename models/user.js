const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid Email');
      }
    },
  },
  phone: {
    type: Number,
    maxlength: 10,
    unique: true,
    trim: true,
    required: true,
  },
  age: {
    type: Number,
    trim: true,
    min: 0,
  },
  gender: {
    type: String,
    enum: ['m', 'f', 'o'],
    required: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  nationality: {
    type: String,
    trim: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  flights: [
    {
      flight: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 8);
  next();
});

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, 'deathNote');

  user.tokens = user.tokens.concat({ token });

  await user.save();

  return token;
};

userSchema.statics.findByCredentials = async (email, candidatePassword) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw 'Invalid Credentials! Unable to login.';
  }

  const isMatch = await bcrypt.compare(candidatePassword, user.password);

  if (!isMatch) {
    throw 'Invalid Credentials! Unable to login.';
  }

  return user;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
