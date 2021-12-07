const mongoose = require("mongoose");
const Schema = mongoose.Schema;


// Create Schema for poems
const PoemSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});



module.exports = User = mongoose.model("poems", PoemSchema);