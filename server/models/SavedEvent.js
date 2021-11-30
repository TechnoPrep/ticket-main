const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
// require('mongoose-double')(mongoose)

const SchemaTypes = mongoose.Schema.Types;

const savedEventSchema = new Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
    required: true,
    trim: true,
    match: [/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Must be a valid US Zip Code!'],
  },
  lat: {
    type: String,
    required: true,
  },
  lon: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    default: new(Date),
  },
  eventImage: {
    type: String,
    default: 0,
  },
});

const SavedEvent = model('SavedEvent', savedEventSchema);

module.exports = SavedEvent;
