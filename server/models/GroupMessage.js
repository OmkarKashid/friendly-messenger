const mongoose = require("mongoose");
const Message = require("./Message.js");
const { Schema, model } = mongoose;

const groupMessageSchema = new Schema(
  {
    groupId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    messages: [
      {
        messageId: {
          type: Schema.Types.ObjectId,
          ref: Message,
          required: true,
        },
        referenceId: {
          type: Schema.Types.ObjectId,
          ref: Message,
          default: null,
        },
      },
    ],
  },
  { collection: "GROUP_MESSAGES" }
);

const GroupMessage = model(
  "GroupMessage",
  groupMessageSchema,
  "GROUP_MESSAGES"
);
module.exports = GroupMessage;
