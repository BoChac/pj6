const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const User = new Schema({

  name: {type: String, minlength: 6, required: true},
  email: {type: String, maxlength: 255, required: true},
  password: {type: String, maxlength: 255, required: true},

},{
  timestamps:true,
});

module.exports = mongoose.model('User', User);
