import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
  first_name : {
    type : String,
    required : true
  },
  last_name : {
    type : String,
    required : true
  },
  email : {
    type : String,
    required : true
  },
  username : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  },
  account_created : {
    type: Date,
    default: () => Date.now(),
    immutable: true
  },
  image : Buffer
}, {collection : "USERS"});

const User = model('User', userSchema, 'USERS');
export default User;