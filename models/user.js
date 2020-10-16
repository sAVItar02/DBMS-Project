const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
 fname: {
   type: String,
   required: true,
   trim: true
 },
 lname: {
   type : String,
   required: true,
   trim: true
 },
 email: {
   type: String,
   unique: true,
   required: true,
   trim: true,
   lowercase: true,
   validate( value ) {
   if(!validator.isEmail(value))
   {
       throw new Error("Invalid Email")
   }
 }
 },
 phone: {
   type: Number,
   maxlength: 10,
   unique: true,
   trim: true
 },
 age: {
   type: Number,
   trim: true,
   min: 0
 },
 gender: {
   enum : ['M','F','O'],
   required: true
 },
 password: {
   type: String,
   required: true,
   trim: true,
   minlength: 6
 },
 nationality: {
   type: String,
   trim: true
 },
 dob: {
   type: Date,
   required: true
 },
   isAdmin: {type: Boolean, default: false}
});

module.exports = mongoose.model("User", userSchema);