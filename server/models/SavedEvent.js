const { Schema, model } = require('mongoose');

const savedEventSchema = new Schema({
  eventName: {
    type: String,
    required: true,
  },
  address: {
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
