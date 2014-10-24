var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var friend = new Schema({
  name: {type: String, required: true},
  age: {type: Number},
  yearMet: {type: Date} 
});

module.exports = mongoose.model('Friend', friend);