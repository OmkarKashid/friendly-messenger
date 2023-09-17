const mongoose = require("mongoose");
const Message = require("./Message.js");
const { Schema, model } = mongoose;

const privateMessageSchema = new Schema(
  {
    senderId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    receipientId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Message" }],
  },
  { collection: "PRIVATE_MESSAGES" },
);

const PrivateMessage = model(
  "PrivateMessage",
  privateMessageSchema,
  "PRIVATE_MESSAGES",
);
module.exports = PrivateMessage;
