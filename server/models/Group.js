const mongoose = require("mongoose");
const User = require("./User.js");
const { Schema, model } = mongoose;

const groupSchema = new Schema(
  {
    group_name: {},
    group_description: {},
    group_image: Buffer,
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    members: [{ type: Schema.Types.ObjectId, ref: "User" }],
    group_created: {
      type: Date,
      default: () => Date.now(),
      immutable: true,
    },
  },
  { collection: "GROUPS" },
);

const Group = model("Group", groupSchema, "GROUPS");
module.exports = Group;
