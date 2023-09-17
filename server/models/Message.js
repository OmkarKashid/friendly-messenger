import mongoose from 'mongoose';
import User from './User.js';
const { Schema, model } = mongoose;

const messageSchema = new Schema({
  text : {
    type : String,
    required : true
  },
  referenceId : {
    type : Schema.Types.ObjectId,
    ref : 'Message',
    default : null
  },
  sent_time : {
    type : Date,
    default : () => Date.now(),
  },
  from : {
    type : Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  to : {
    type : Schema.Types.ObjectId,
    ref : 'User',
    required : true
  },
  isDelivered : {
    type : Boolean,
    default : false
  },
  isRead : {
    type : Boolean,
    default : false
  }
}, {collection : "MESSAGES"});

const Message = model('Message', messageSchema, 'MESSAGES');
export default Message;