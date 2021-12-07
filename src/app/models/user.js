const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    minLength: 6,
    unique: true,
    required: true,
    trim: true
  },
  first_name: {
    type: String,
    maxLength: 255
  },
  last_name: {
    type: String,
    maxLength: 255
  },
  email: {
    type: String,
    maxLength: 255,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String
  }
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
