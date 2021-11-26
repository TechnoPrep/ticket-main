const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: false,
    trim: true,
  },
  zipCode: {
    type: Number,
    required: true,
    trim: true,
    match: [/(^\d{5}$)|(^\d{5}-\d{4}$)/, 'Must be a valid US Zip Code!'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  emailConfirmed: {
    type: Boolean,
    required: true,
    default: false,
  },
  prefsSet: {
    type: Boolean,
    required: true,
    default: false,
  },
  savedEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'SavedEvent',
    },
  ],
  eventPrefs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'EventPref',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
