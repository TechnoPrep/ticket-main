const { Schema, model } = require('mongoose');
const mongoose = require('mongoose')
// require('mongoose-double')(mongoose)

const SchemaTypes = mongoose.Schema.Types;

const savedEventSchema = new Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    required: true,
  },
  eventId : {
    type: String,
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
  city: {
    type: String,
    required: true,
  },
  stateCode: {
    type: String,
    required: true,
  },
  eventDate: {
    type: String,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  eventImage: {
    type: String,
    required: true,
  },
  queryLink: {
    type: String,
    required: true,
  },
  healthCheck: {
    type: Boolean,
    required: true,
  }
});

const SavedEvent = model('SavedEvent', savedEventSchema);

module.exports = SavedEvent;
