const { Schema, model } = require('mongoose');

const eventPrefSchema = new Schema({
  category: {
    type: String,
    required: 'You need to select a category',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  SubCategory: {
    type: String,
    default: null,
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

const EventPref = model('EventPref', eventPrefSchema);

module.exports = EventPref;
