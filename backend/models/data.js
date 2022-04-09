const mongoose = require("mongoose")
const { Schema } = mongoose;
const dataSchema = new Schema({
    name:  {
        type : String,
        required : true,
        trim : true
    },
    email: {
      type : String,
      
      required : true
    },
    address: {
      type : String,
      required : true
    },
    docName : {
        type : String,
        required : true
    },
    time : {
        type : Date,
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
  });
  const Data = mongoose.model("data", dataSchema)
  module.exports = Data