const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
  customerNr: {
    type: String,
    required: true
  },
  salutation: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  companyName: {
    type: String
  },
  street: {
    type: String,
    required: true
  },
  houseNr: {
    type: String,
    required: true
  },
  zip: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  mobileNr: {
    type: String
  },
  phoneNr: {
    type: String
  },
  email: {
    type: String
  },
  comment: {
    type: String
  },
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = model('Customer', customerSchema);
