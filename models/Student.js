const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  rollNo: { type: String },
  name: { type: String },
  adharCardNo: { type: String },
  mobNo: { type: String },
});

module.exports = mongoose.model('Student', StudentSchema);
