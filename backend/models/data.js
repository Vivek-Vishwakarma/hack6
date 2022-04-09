const mongoose = require("mongoose");
const { Schema } = mongoose;
const dataSchema = new Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
  },
  address: {
    type: String,
  },
  docName: {
    type: String,
  },
  time: {
    type: String,
  },
  date: {
    type: String,
  },
  docMail : {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Data = mongoose.model("data", dataSchema);
module.exports = Data;
