const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({

  name: {type: String, maxlength: 255},
  count: {type: String,maxlength:255},
  image: {type: String,maxlength:255},
  slug: {type:String, slug: 'name', unique:true},
  description: {type:String},
  videoid:{type:String},
  level:{type:String},

},{
  timestamps:true,
});

module.exports = mongoose.model('Course', Course);
